import { useEffect, useState } from "react";
import { navLinks } from "@/data/index";
import { Link } from "react-router-dom";
import { links } from "types";
import { useThemeStore } from "@/stores/useThemeStore";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
	const { theme, toggleTheme } = useThemeStore();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
				}`}>
				<div className="container max-w-6xl mx-auto px-4 sm:px-6">
					<div className="flex items-center justify-between h-16">
						<Link to="/" className="font-bold text-xl">
							Matias<span className=" text-sky-500">Dev</span>
						</Link>

						<nav className="hidden md:flex items-center space-x-6">
							{navLinks.map((link: links) => (
								<a
									className=" hover:text-sky-500 transition-colors font-semibold text-foreground"
									key={link.title}
									href={link.href}>
									{link.title}
								</a>
							))}
							<button
								type="button"
								className="ml-2 cursor-pointer"
								onClick={toggleTheme}>
								{theme === "light" ? (
									<Moon size={18} className="hover:text-sky-500" />
								) : (
									<Sun size={18} className="hover:text-amber-500" />
								)}
							</button>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
}
