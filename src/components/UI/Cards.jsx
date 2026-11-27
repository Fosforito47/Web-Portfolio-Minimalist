import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { ChevronRight } from "lucide-react";

/* === Icono SVG por defecto === */
export function DefaultIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-chevron-right preview-icon"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* === Imagen del Card === */
export function CardMedia({
  className,
  PreviewImg,
  aspect = "video",
  alt = "Card Image",
}) {
  //Estador error, se vuelve true si el url de la imagen no carga
  const [imgError, setImageError] = useState(false);

  /**
   * Usamos 'aspect-video' o 'aspect-square' para que el contenedor sea responsivo en altura
   *La  relacion de aspecto sera 16:9
   * O usamos apect-square para una relacion de aspecto 1:1
   */

  const ratio = aspect === "square" ? `aspect-square` : `aspect-video`;

  /**
   * Declaramos una imagen por defecto en caso de que el componente no provea una imagen o el link este roto
   */
  const defaultImg = ` ${ratio} bg-black/5`;

  return (
    <div
      className={`
                         rounded-t-xl  overflow-hidden
                                ${imgError || !PreviewImg ? `${defaultImg} flex items-center justify-center text-primary` : `${ratio}`}
                                ${!imgError && PreviewImg ? `min-h-[150px] ` : ``} // Altura mínima para cuando hay imagen
                `}
    >
      {!imgError && PreviewImg ? (
        <img
          src={PreviewImg}
          alt={alt}
          className={twMerge(`
            w-full h-full object-cover 
            transition-transform duration-300 ease-in-out
            group-hover:scale-110
              ${className} `)}
          onError={() => {
            setImageError(true);
          }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-sm font-semibold text-primary/70">
            {PreviewImg ? "Image failed" : "No Image"}
          </span>
        </div>
      )}
    </div>
  );
}

/* === Icono del Card=== */
export function CardIcon({ size = "p-3", align = "center", Icon }) {
  const aligment =
    align === "center"
      ? "items-center"
      : align === "top"
        ? "items-start"
        : "items-end";

  return (
    <div className="">
      <div className={`${size}  ${aligment} bg-accent/20  rounded-lg`}>
        <Icon className="w-6 h-6 text-accent items-center" />
      </div>
    </div>
  );
}

/* === Contenido del Card === */
export function CardContent({
  title = "Default Title",
  description = "Default Description",
  align = "left",
  titleClass,
  descriptionClass,
  children,
}) {
  const textAlign =
    align === "center"
      ? "text-center mb-3"
      : align === "right"
        ? "text-right mb-4"
        : "text-left mb-4";

  return (
    <div className={textAlign}>
      {title && (
        <h3
          className={twMerge(
            `text-xl font-semibold mb-2 text-primary ${titleClass}`,
          )}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          className={twMerge(
            `text-sm text-secondary  leading-relaxed ${descriptionClass}`,
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

/* === Chips del Card === */
export function ChipsContainer({ Chips }) {
  const defaultChips = [
    <Chip key="1" label="Default" />,
    <Chip key="2" label="Default" />,
    <Chip key="3" label="Default" />,
  ];

  /**
   * Chip?.length: es un operador terniario que  accede a la propiedad length solamente si Chips existe.
   *  Si es null o undefined, devuelve undefined en lugar de lanzar un error.
   *
   * ChipsToRender: analiza si la prop Chips es verdadera, si no, toma el valor de defaultChips
   */
  const chipsToRender = Chips?.length ? Chips : defaultChips;

  return (
    <div className="flex flex-wrap gap-2">
      {chipsToRender.map((chipElement) => chipElement)}
    </div>
  );
}
export function Chip({ label }) {
  return (
    <div className="px-3 py-[2px] border border-tertiary 0 w-fit rounded-2xl">
      <p className="text-[10px] text-tertiary font-medium">{label}</p>
    </div>
  );
}

/* === Acciones del Card === */
export function CardActions({
  children,
  align = "center",
  direction = "row",
  className,
}) {
  const alignment =
    align === " left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  return (
    <div
      className={twMerge(
        `flex ${direction === "col" ? "flex-col" : ""}  gap-3  ${alignment} ${className || ""}`,
      )}
    >
      {children}
    </div>
  );
}

export function CardButton({
  variant,
  buttonText = "Default",
  TrailingIcon = DefaultIcon,
  Icon = DefaultIcon,
  onClick,
}) {
  //   const variantButton = variant ? variant : "primary";

  const varianButton =
    variant === "icon" ? (
      <div>
        <Button
          variant="secondary"
          iconOnly={true}
          Icon={Icon}
          onClick={onClick}
          className="w-12 h-9  grow"
        />
      </div>
    ) : (
      <div className="flex grow">
        <Button
          variant="primary"
          TrailingIcon={TrailingIcon}
          text={buttonText}
          onClick={onClick}
          className=" w-full gap-o "
        />
      </div>
    );

  return varianButton;
}

export function ContentContainer({
  children,
  layout = "column",
  align = "center",
  gap = "gap-4",
  className = "",
}) {
  const layoutClass =
    layout === "row" ? "flex flex-row  p-6" : "flex flex-col  p-8";

  const alignment =
    align === "left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  return (
    <div className={twMerge(`${layoutClass} ${alignment} ${gap}`, className)}>
      {children}
    </div>
  );
}
/* === Contenedor principal del Card === */
export function CardContainer({
  children,
  className,
  scale = true,
  shadow = false,
}) {
  const base = `
    w-full min-w-[230px]
    bg-container/5 border border-outline rounded-xl
    transition-all duration-300 transform overflow-hidden
    group

  `
    .replace(/\s+/g, " ")
    .trim();

  const scaleStyle = scale ? "hover:-translate-y-[3px]" : "";
  const shadowStyle = shadow
    ? "hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
    : "";

  return (
    <div
      className={twMerge(
        `${base}  ${scaleStyle} ${shadowStyle} ${className || ""}`,
      )}
    >
      {children}
    </div>
  );
}
