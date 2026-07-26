import React, { ElementType } from "react";

export interface ButtonProps {
  as?: ElementType;
  color?: string;
  bgColor?: string;
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
  [key: string]: any;
}

export const Button = ({
  as: Component = "button",
  color = "#000",
  bgColor = "#eee",
  paddingY = "2px",
  paddingX = "16px",
  margin = "0",
  style,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Component
      {...rest}
      style={{
        color,
        backgroundColor: bgColor,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        margin,
        border: "none",
        borderRadius: "2px",
        cursor: "pointer",
        fontSize: "12px",
        display: "inline-block",
        textDecoration: "none",
        ...style,
      }}
    >
      {children}
    </Component>
  );
};
