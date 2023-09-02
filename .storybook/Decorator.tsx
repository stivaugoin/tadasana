import React from "react";

export function Decorator(Story: React.FC) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Story />
    </div>
  );
}
