import classNames from "classnames";
import React, {
  Children,
  cloneElement,
  createContext,
  isValidElement,
} from "react";

type TabsContextProps<T extends number = number> = {
  activeIndex: T;
  setActiveIndex: (index: T) => void;
};

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

const useTabContext = () => {
  const context = React.useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};

export const Tabs = ({
  children,
  defaultIndex = 0,
}: {
  children: React.ReactNode;
  defaultIndex?: number;
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(defaultIndex);

  let i = 0;

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="w-full">
        {Children.map(children, (child) => {
          if (
            isValidElement(child) &&
            typeof child.type !== "string" &&
            child.type.name === "TabsContent"
          ) {
            return cloneElement(child, { tabIndex: i++ });
          }

          return child;
        })}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children }: { children: React.ReactNode }) => {
  let i = 0;

  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px space-x-8" aria-label="Tabs">
        {Children.map(children, (child) => {
          if (
            isValidElement(child) &&
            typeof child.type !== "string" &&
            child.type.name === "TabsButton"
          ) {
            return cloneElement(child, { tabIndex: i++ });
          }

          return child;
        })}
      </nav>
    </div>
  );
};

const TabsButton = ({
  children,
  tabIndex,
}: {
  children: React.ReactNode;
  tabIndex?: number;
}) => {
  const { activeIndex, setActiveIndex } = useTabContext();

  return (
    <button
      className={classNames(
        "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",
        [
          activeIndex === tabIndex
            ? "border-primary-500 text-primary-600"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
        ]
      )}
      onClick={() => tabIndex !== undefined && setActiveIndex(tabIndex)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({
  children,
  tabIndex,
}: {
  children: React.ReactNode;
  tabIndex?: number;
}) => {
  const { activeIndex } = useTabContext();

  if (tabIndex !== activeIndex) {
    return null;
  }

  return <div className="py-4">{children}</div>;
};

Tabs.Content = TabsContent;
Tabs.Button = TabsButton;
Tabs.List = TabsList;
