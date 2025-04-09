type HeadingProps = {
	title: string;
	subtitle: string;
};

export default function Heading({ title, subtitle }: HeadingProps) {
	return (
		<>
			<div className="text-center mb-12">
				<h2 className="text-2xl lg:text-4xl font-bold">{title}</h2>

				{subtitle && (
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						{subtitle}
					</p>
				)}
			</div>
		</>
	);
}
