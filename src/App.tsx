import { useEffect } from "react";
import { useThemeStore } from "./stores/useThemeStore";
import Router from "./router";

export default function App() {
	const { theme } = useThemeStore();

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return <Router />;
}
