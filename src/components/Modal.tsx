import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment, ReactNode } from "react";

const ModalContext = React.createContext({ onRequestClose: () => {} });

function useModalContext() {
  return React.useContext(ModalContext);
}

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function Modal({
  children,
  isOpen,
  onRequestClose,
}: ModalProps): JSX.Element {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        open={isOpen}
        onClose={onRequestClose}
      >
        <div className="flex items-center justify-center min-h-screen p-0 tablet:p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 tablet:scale-95"
            enterTo="opacity-100 tablet:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 tablet:scale-100"
            leaveTo="opacity-0 tablet:scale-95"
          >
            <div
              className={classNames([
                "relative inline-block overflow-hidden transition-all transform bg-white rounded-lg shadow-xl",
                "px-4 pt-5 pb-4 m-4",
                "w-full max-w-xl",
              ])}
            >
              <ModalContext.Provider value={{ onRequestClose }}>
                {children}
              </ModalContext.Provider>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function Title({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Dialog.Title
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900"
    >
      {children}
    </Dialog.Title>
  );
}

function Description({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Dialog.Description className="text-base text-gray-500">
      {children}
    </Dialog.Description>
  );
}

function CloseButton(): JSX.Element {
  const { onRequestClose } = useModalContext();

  return (
    <button
      className={classNames([
        "absolute rounded-full right-4 top-4",
        "text-gray-400 hover:text-gray-500 bg-white",
        "focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
      ])}
      onClick={onRequestClose}
    >
      <span className="sr-only">Close</span>
      <XIcon />
    </button>
  );
}

Modal.CloseButton = CloseButton;
Modal.Description = Description;
Modal.Title = Title;

const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
