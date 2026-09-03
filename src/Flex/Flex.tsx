import React from "react";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  flexDir?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  gap?: string | number;
  wrap?: boolean;
  bgColor?: string;
  padding?: string | number;
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
  marginX?: string | number;
  marginY?: string | number;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
}

const justifyMap: Record<string, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly",
};

const alignMap: Record<string, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};

export const Flex = ({
  flexDir = "row",
  justify = "start",
  align = "stretch",
  gap = 0,
  wrap = false,
  bgColor,
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
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  style,
  children,
  ...rest
}: FlexProps) => {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        boxSizing: "border-box",
        flexDirection: flexDir,
        justifyContent: justifyMap[justify],
        alignItems: alignMap[align],
        flexWrap: wrap ? "wrap" : "nowrap",
        gap,
        backgroundColor: bgColor,
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
        maxWidth,
        minWidth,
        maxHeight,
        minHeight,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
