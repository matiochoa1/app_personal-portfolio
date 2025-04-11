import { ComponentPropsWithoutRef, forwardRef, ComponentRef } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

export const Tabs = ({ children, ...props }: TabsProps) => (
	<TabsPrimitive.Root {...props}>{children}</TabsPrimitive.Root>
);

export const TabsList = forwardRef<
	ComponentRef<typeof TabsPrimitive.List>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ ...props }, ref) => <TabsPrimitive.List ref={ref} {...props} />);
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = forwardRef<
	ComponentRef<typeof TabsPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ ...props }, ref) => <TabsPrimitive.Trigger ref={ref} {...props} />);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = forwardRef<
	ComponentRef<typeof TabsPrimitive.Content>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ ...props }, ref) => <TabsPrimitive.Content ref={ref} {...props} />);
TabsContent.displayName = TabsPrimitive.Content.displayName;
