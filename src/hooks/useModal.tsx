import { useState } from "react";

export function useModal(
  defaultOpen: boolean = false
): {
  close: () => void;
  isOpen: boolean;
  open: () => void;
  toggle: () => void;
} {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen(!isOpen);

  return {
    close,
    isOpen,
    open,
    toggle,
  };
}
