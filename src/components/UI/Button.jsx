import { twMerge } from "tailwind-merge"; //esta libreria te permite merge dos estilos de tailwind sin generar conflictos

/**Estas son las propiedades que el componente recibe:
 * children: el texto o contenido dentro del botón (por defecto “Button”).
 * variant: define el estilo del botón (primary, outline, ghost).
 * onClick: función que se ejecuta cuando se hace clic.
 * type: el tipo de botón (button, submit, reset).
 * className: permite añadir clases personalizadas desde fuera.
 * disabled: desactiva el botón (visual y funcionalmente).
 */

export function Button({
  text = "",
  variant = "primary",
  onClick,
  type = "button",
  LeadingIcon,
  TrailingIcon,
  Icon,
  iconOnly = false,
  iconSize = "18",
  translate = false,
  className = "",
  disabled = false,
}) {
  /**
   *  inline-flex: crea un inline element
   * gap-2: es necesario este gap por si el botton trae iconos incluidos
   * font-semibold: texto seminegrita.
   * p-4 rounded-xl: padding y esquinas redondeadas.
   * transition-all duration-300: animaciones suaves.
   * enabled: solo activa esas propiedades cuando el boton esta activo
   * enabled:hover:scale-[1.02]: al pasar el mouse, el botón crece levemente.
   * active:scale-[0.98]: al presionar, se encoge un poco.
   * disabled:opacity-40 disabled:cursor-not-allowed: cuando está desactivado, se ve opaco y el cursor cambia.
   * hover:-translate-y-1: mueve el boton un pixel hacia arriba cuando se hace hover
   */

  const hoverTranslate = translate ? "enabled:hover:-translate-y-1" : "";

  const baseStyle = `
    inline-flex items-center justify-center gap-2
	text-md font-medium
	transition-all duration-300 transform 
	disabled:opacity-40 disabled:cursor-not-allowed
    ${hoverTranslate}
   `;

  // Variantes de estilo
  const variants = {
    primary: `
		bg-primary text-white rounded-3xl 
		enabled:hover:bg-accent enabled:hover:text-white 
        enabled:hover:border-accent
        px-[20px] py-[8px]
		`,
    secondary: `
        border-2 border-tertiary/50  text-primary rounded-3xl 
		enabled:hover:bg-accent enabled:hover:text-white 
        enabled:hover:border-2  enabled:hover:border-accent
        px-[20px] py-[6px]
    `,
    ghost: `
		enabled:hover:text-primary
        enabled:hover:text-accent
	`,
  };

  /**
   * Esto selecciona el estilo según la prop variant. Si el usuario pasa un valor no valido, usa primary por defecto.
   */
  const variantStyle = variants[variant] || variants.primary;

  /**
   * Es una tenary conditional que evalua si la propiedad "iconOnly" es verdadera
   * si lo es entonces aplica un estilo de padding, sino aplica el otro estilo de padding
   */

  /**
   * Button Size:
   * padding x = 26px
   * padding y = 10px
   *
   * h-10: 40px de altura.
   * w-10 : 40px de ancho.
   * min-w-10 : evita que se reduzca.
   * p-0: elimina el padding interno.
   */
  const sizeStyle = iconOnly ? "h-10 w-10 min-w-10 p-0 " : "";

  // Construimos las clases con twMerge correctamente
  const finalClass = twMerge(baseStyle, variantStyle, sizeStyle, className);

  /**
   * Retorna el botton con todas su propiedades.
   * La propiedad "className={`${baseStyle} ${variantStyle}${sizeStyle} ${className}" concatena los estilos de todas esas variables
   * Todo lo que esta dentro del button se renderiza condicionalmente
   */
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClass}
    >
      {/**
       * LeadingIcon: Es una prop que espera un componente de React (el componente SVG importado, comoGithubIcon).
       * La condición " LeadingIcon &&"  comprueba si esta prop fue proporcionada.
       * "!iconOnly:" Comprueba que el botón no sea solo un ícono. Si lo es, el icono se renderizará en la sección final.
       * Si ambas son ciertas, se renderiza el componente LeadingIcon, pasándole clases de CSS para establecer su tamaño (h-4 w-4 — 4x4 unidades)
       * y un estilo específico para el icono (iconVarient).
       */}
      {/* Ícono a la izquierda */}
      {LeadingIcon && !iconOnly && <LeadingIcon size={iconSize} />}

      {/* Texto del botón */}
      {!iconOnly && <span>{text}</span>}

      {/* Ícono a la derecha */}
      {TrailingIcon && !iconOnly && <TrailingIcon size={iconSize} />}

      {/* Solo ícono */}
      {iconOnly && <Icon size={iconSize} />}
    </button>
  );
}
