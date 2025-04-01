import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/ui/Navbar";

export default function AppLayout() {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<AnimatePresence mode="wait">
					<main className="flex-1">
						<Outlet />
					</main>
				</AnimatePresence>
			</div>
		</>
	);
}
