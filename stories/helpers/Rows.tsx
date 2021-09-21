import React from "react";

export function Rows({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="flex flex-col gap-4">{children}</div>;
}
