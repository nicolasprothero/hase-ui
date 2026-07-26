import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";
  color?: string;
  bgColor?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  lineHeight?: string | number;
  align?: "left" | "center" | "right" | "justify";
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
  width?: string | number;
}

export const Text = ({
  as = "p",
  color,
  bgColor,
  fontSize,
  fontWeight,
  lineHeight,
  align,
  paddingY,
  paddingX,
  margin,
  width,
  style,
  children,
  ...rest
}: TextProps) => {
  const Tag = as;

  return (
    <Tag
      {...rest}
      style={{
        color,
        backgroundColor: bgColor,
        fontSize,
        fontWeight,
        lineHeight,
        textAlign: align,
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
