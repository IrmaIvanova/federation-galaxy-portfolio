import { useContext } from "react";
import { TabsContext } from "../Tabs";
import { cn } from "../../../../utils";

export interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  disabled = false,
  className,
}) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  const { selectedTab, setSelectedTab } = context;
  const isSelected = selectedTab === value;

  return (
    <button
      className={cn(
        'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
        isSelected 
          ? 'bg-light-accent dark:bg-dark-accent text-light-copy dark:text-dark-copy shadow-sm' 
          : 'text-light-copy-muted dark:text-dark-copy-muted hover:text-light-copy dark:hover:text-dark-copy',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={() => !disabled && setSelectedTab(value)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};