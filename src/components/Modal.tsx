import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import React, { Fragment, ReactNode } from "react";

const ModalContext = React.createContext({ onRequestClose: () => {} });

function useModalContext() {
  return React.useContext(ModalContext);
}

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
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
      <XIcon aria-hidden="true" className="w-6 h-6" />
    </button>
  );
}

Modal.CloseButton = CloseButton;
Modal.Description = Description;
Modal.Title = Title;
