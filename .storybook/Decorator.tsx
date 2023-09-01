import React from "react";

export function Decorator(Story: React.FC) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Story />
    </div>
  );
}
