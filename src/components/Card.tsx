import classnames from "classnames";
import React, { HTMLAttributes, ReactNode } from "react";
import { Text } from "../components/Text";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className }: CardProps): JSX.Element {
  return (
    <div
      className={classnames(
        "flex-shrink-0 w-full bg-white border border-gray-300 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Body({ children, className }: CardBodyProps): JSX.Element {
  return <div className={classnames("px-4", className)}>{children}</div>;
}

function Header({
  actions,
  className,
  classNameActions,
  classNameTitle,
  title,
}: {
  actions?: Array<React.ReactNode>;
  className?: string;
  classNameActions?: string;
  classNameTitle?: string;
  title: string;
}): JSX.Element {
  return (
    <div className={classnames("px-4 py-5", className)}>
      <div
        className={classnames(
          "flex items-center justify-between",
          classNameTitle
        )}
      >
        <Text bold size="large">
          {title}
        </Text>

        {actions && (
          <div
            className={classnames(
              "flex items-center justify-center flex-shrink-0 gap-2",
              classNameActions
            )}
          >
            {actions?.map((action) => action)}
          </div>
        )}
      </div>
    </div>
  );
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  justify?: "around" | "between" | "center" | "end" | "start";
}

function Footer({
  children,
  className,
  justify = "start",
}: CardFooterProps): JSX.Element {
  return (
    <div
      className={classnames(
        "px-4 py-5 flex space-x-4",
        {
          "justify-around": justify === "around",
          "justify-between": justify === "between",
          "justify-center": justify === "center",
          "justify-end": justify === "end",
          "justify-start": justify === "start",
        },
        className
      )}
    >
      {children}
    </div>
  );
}

Card.Body = Body;
Card.Header = Header;
Card.Footer = Footer;
