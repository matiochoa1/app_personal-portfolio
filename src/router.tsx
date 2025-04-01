import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

// Loading Fallback
import Loading from "@/components/common/Loading";

// Lazy Load Components
const Home = lazy(() => import("@/pages/HomePage"));

export default function Router() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
