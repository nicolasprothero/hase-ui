import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  color?: string;
  bgColor?: string;
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  // isRounded?: boolean;
}

export const Image = ({
  bgColor,
  paddingY,
  paddingX,
  margin,
  width,
  height,
  borderRadius,
  // isRounded,
  style,
  ...rest
}: ImageProps) => {
  return (
    <img
      {...rest}
      style={{
        backgroundColor: bgColor,
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
    />
  );
};
