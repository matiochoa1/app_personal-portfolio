import * as ProgressPrimitive from "@radix-ui/react-progress";

type ProgressProps = {
	value?: number;
};

export default function Progress({ value }: ProgressProps) {
	return (
		<ProgressPrimitive.Root className="relative w-full h-4 overflow-hidden rounded-full bg-secondary">
			<ProgressPrimitive.Indicator
				className="flex-1 w-full h-full transition-all bg-primary"
				style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
			/>
		</ProgressPrimitive.Root>
	);
}
