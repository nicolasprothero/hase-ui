import React from "react";

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  color?: string;
  padding?: string | number;
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

export const Div = ({
  bgColor,
  color,
  padding,
  paddingY,
  paddingX,
  margin,
  width,
  height,
  borderRadius,
  style,
  children,
  ...rest
}: DivProps) => {
  return (
    <div
      {...rest}
      style={{
        backgroundColor: bgColor,
        boxSizing: "border-box",
        color,
        padding: padding,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        margin,
        width,
        height,
        borderRadius,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
