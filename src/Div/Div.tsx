import React from "react";

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  color?: string;
  padding?: string | number;
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
  marginX?: string | number;
  marginY?: string | number;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
}

export const Div = ({
  bgColor,
  color,
  padding,
  paddingY,
  paddingX,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
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
        paddingTop: paddingTop ?? paddingY,
        paddingBottom: paddingBottom ?? paddingY,
        paddingLeft: paddingLeft ?? paddingX,
        paddingRight: paddingRight ?? paddingX,
        margin: margin,
        marginLeft: marginLeft ?? marginX,
        marginRight: marginRight ?? marginX,
        marginTop: marginTop ?? marginY,
        marginBottom: marginBottom ?? marginY,
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
