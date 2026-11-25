import { useState } from "react";
import { X } from "lucide-react";

export function Chip({
  label,
  variant = "outlined",
  color = "primary",
  size = "medium",
  icon,
  avatar,
  onClick,
  active = false,
  className = "",
}) {
  // Estado interno del Chip
  /**
   * Esta constante es un react hook useState
   * isActive es una variable booleana de estado que almacena si el boton est activo
   * setIsActive vuelve a renderizar el componente
   * useState(active): define el valor inicial con el valor por defecto del prop, en este caso 'false'
   */
  const [isActive, setIsActive] = useState(active);

  /* === Paleta de Colores === */
  /**
   * colorStyle define el color del borde y texto
   */
  const colorStyles = {
    primary: `text-primary ${
      isActive ? "border-accent" : "border-tertiary/40"
    }`,
  };

  const backgroundStyles = {
    primary: "bg-accent/50",
  };

  const sizeStyles = {
    medium: "text-[12px] px-3 py-[6px]",
    large: "text-[14px] px-4 py-[8px]",
  };

  const variantStyles = {
    filled: backgroundStyles[color],
    outlined: "bg-transparent",
  };

  /* === Manejador de Click  === */
  const handleClick = () => {
    setIsActive(!isActive);
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isActive}
      className={`
        inline-flex items-center rounded-full
        font-medium select-none border-[1.5px]
        transition-all duration-300
        cursor-pointer
        ${colorStyles[color] ?? colorStyles.primary}
        ${variantStyles[variant] ?? variantStyles.outlined}
        ${sizeStyles[size] ?? sizeStyles.medium}
        hover:border-primary  hover:transition-none
        ${className}
      `}
    >
      {/* Avatar */}
      {avatar && (
        <span className="mr-2 h-5 w-5 overflow-hidden rounded-full">
          {avatar}
        </span>
      )}

      {/* Icon */}
      {icon && <span className="mr-1 text-sm">{icon}</span>}

      {/* Label */}
      <span
        className={`
          transition-colors duration-300
          ${isActive ? "text-accent" : "text-primary"}
        `}
      >
        {label}
      </span>
    </button>
  );
}
