import React from "react";

export function useModal(defaultOpen?: boolean): {
  close: () => void;
  isOpen: (id?: string) => boolean;
  open: (id?: string) => void;
  toggle: (id?: string) => void;
} {
  const [show, setShow] = React.useState<boolean | string>(
    defaultOpen ?? false
  );

  const close = () => setShow(false);
  const isOpen = (id?: string) =>
    typeof id === "string" ? show === id : Boolean(show);
  const open = (id?: string) => setShow(id ?? true);
  const toggle = (id?: string) => setShow(show ? false : id ?? !show);

  return {
    close,
    isOpen,
    open,
    toggle,
  };
}
