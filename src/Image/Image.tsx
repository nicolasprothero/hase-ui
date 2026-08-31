"use client";

import React, { useState, useRef, useEffect } from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  color?: string;
  bgColor?: string;
  paddingY?: string | number;
  paddingX?: string | number;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  skeletonColor?: string;
}

export const Image = ({
  bgColor,
  paddingY,
  paddingX,
  margin,
  width,
  height,
  borderRadius,
  skeletonColor = "#f5f5f5",
  style,
  onLoad,
  loading = "lazy",
  decoding = "async",
  ...rest
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  const isAutoWidth = width === undefined || width === "auto";
  const isAutoHeight = height === undefined || height === "auto";
  const isFixedFrame = !isAutoWidth && !isAutoHeight;

  const resolvedWidth = isAutoWidth ? "auto" : width;
  const resolvedHeight = isAutoHeight ? "auto" : height;

  return (
    <div
      style={{
        position: "relative",
        width: resolvedWidth,
        height: resolvedHeight,
        minHeight: !loaded && isAutoHeight ? "200px" : undefined,
        minWidth: !loaded && isAutoWidth ? "200px" : undefined,
        borderRadius,
        overflow: "hidden",
        backgroundColor: skeletonColor,
        display: "inline-block",
        flexShrink: 0,
      }}
    >
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: skeletonColor,
          }}
        />
      )}
      <img
        ref={imgRef}
        {...rest}
        loading={loading}
        decoding={decoding}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        style={{
          position: isFixedFrame ? "absolute" : "relative",
          inset: isFixedFrame ? 0 : undefined,
          backgroundColor: bgColor,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          margin,
          width: isFixedFrame ? "100%" : resolvedWidth,
          height: isFixedFrame ? "100%" : resolvedHeight,
          borderRadius,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
          display: "block",
          ...style,
        }}
      />
    </div>
  );
};
