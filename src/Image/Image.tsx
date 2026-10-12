"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "../Button";

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
  allowFullscreen?: boolean;
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
  allowFullscreen = false,
  src,
  alt,
  ...rest
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isFullscreen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  const isAutoWidth = width === undefined || width === "auto";
  const isAutoHeight = height === undefined || height === "auto";
  const isFixedFrame = !isAutoWidth && !isAutoHeight;

  const resolvedWidth = isAutoWidth ? "auto" : width;
  const resolvedHeight = isAutoHeight ? "auto" : height;

  return (
    <>
      <div
        style={{
          position: "relative",
          width: resolvedWidth,
          height: resolvedHeight,
          minHeight:
            !loaded && isAutoHeight && !isFixedFrame ? "200px" : undefined,
          minWidth:
            !loaded && isAutoWidth && !isFixedFrame ? "200px" : undefined,
          borderRadius,
          overflow: "hidden",
          backgroundColor: skeletonColor,
          display: "inline-block",
          flexShrink: 0,
          cursor: allowFullscreen ? "pointer" : undefined,
        }}
        onClick={() => allowFullscreen && setIsFullscreen(true)}
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
          src={src}
          alt={alt}
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

      {isFullscreen && (
        <div
          onClick={() => setIsFullscreen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "white",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <Button
            onClick={(e: any) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
            }}
          >
            CLOSE
          </Button>

          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
