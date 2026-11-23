import React from "react";

export function Grid({ children, variant, gap = 8, className = "" }) {
  const gridClass = {
    base: `grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3`,
  };

  const gridClassStyle = gridClass[variant] || gridClass.base;

  // Mantenemos un objeto simple para la clase de espaciado (gap)
  const gapClasses = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
  };

  const gapClass = gapClasses[gap] || gapClasses[8];

  return (
    <div className={`${gridClassStyle} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}
