import React from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  bgColor?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  align?: "left" | "center" | "right" | "justify";
  lineHeight?: string | number;
  padding?: string | number;
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
  width?: string | number;
}

export const Heading = ({
  as = "h1",
  color,
  bgColor,
  fontSize,
  fontWeight,
  align,
  lineHeight,
  padding,
  paddingY,
  paddingX,
  margin,
  width,
  style,
  children,
  ...rest
}: HeadingProps) => {
  const Tag = as;

  return (
    <Tag
      {...rest}
      style={{
        color,
        backgroundColor: bgColor,
        fontSize,
        fontWeight,
        textAlign: align,
        lineHeight: lineHeight,
        padding: padding,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        margin,
        width,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};
