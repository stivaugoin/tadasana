import React from "react";

export function Row({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="flex flex-row items-end gap-4">{children}</div>;
}
