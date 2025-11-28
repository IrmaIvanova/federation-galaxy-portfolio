import { useContext } from "react";
import { TabsContext } from "../Tabs";
import { cn } from "../../../../utils";
import { Card } from "../../Card";

export interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  className,
}) => {
  const context = useContext(TabsContext);

  if (!context) throw new Error('TabsContent must be used within Tabs');

  const { selectedTab } = context;
  const isSelected = selectedTab === value;

  if (!isSelected) return null;

  return (
    <Card className={cn('mt-4', className)}>
      {children}
    </Card>
  );
};