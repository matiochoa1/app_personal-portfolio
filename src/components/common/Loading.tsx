import { LuPersonStanding } from "react-icons/lu";

export default function Loading() {
	return (
		<>
			<div className="min-h-screen flex items-center justify-center">
				<LuPersonStanding className="text-3xl text-primary animate-bounce text-sky-600" />
				<div className="animate-pulse text-sky-600 font-semibold">
					Loading...
				</div>
			</div>
		</>
	);
}
