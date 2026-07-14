import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bgColor?: string;
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
}

export const Button = ({
  color = "#000",
  bgColor = "#eee",
  paddingY = "4px",
  paddingX = "8px",
  margin = "0",
  style,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
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
        fontSize: "14px",
        ...style,
      }}
    >
      {children}
    </button>
  );
};
