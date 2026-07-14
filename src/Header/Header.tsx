import React from "react";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  color?: string;
  bgColor?: string;
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
  sticky?: boolean;
}

export const Header = ({
  color = "#000",
  bgColor = "#fff",
  paddingY = "16px",
  paddingX = "24px",
  margin = "0",
  sticky = true,
  style,
  children,
  ...rest
}: HeaderProps) => {
  return (
    <header
      {...rest}
      style={{
        position: sticky ? "sticky" : "static",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px black solid",
        color,
        backgroundColor: bgColor,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        margin,
        ...style,
      }}
    >
      {children}
    </header>
  );
};
