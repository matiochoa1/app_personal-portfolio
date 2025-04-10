import { useEffect, useState } from "react";
import { navLinks } from "@/data/index";
import { Link } from "react-router-dom";
import { links } from "types";
import { useThemeStore } from "@/stores/useThemeStore";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar() {
	const { theme, toggleTheme } = useThemeStore();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
					isScrolled
						? "bg-background/80 backdrop-blur-md shadow-sm"
						: "bg-transparent"
				}`}>
				<div className="container max-w-6xl px-4 mx-auto sm:px-6">
					<div className="flex items-center justify-between h-16">
						<Link to="/" className="text-xl font-bold">
							Matias<span className=" text-sky-500">Dev</span>
						</Link>

						{/* Desktop nav */}
						<nav className="items-center hidden space-x-6 md:flex">
							{navLinks.map((link: links) => (
								<a
									className="font-semibold transition-colors hover:text-sky-500 text-foreground"
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

						{/* Mobile nav */}
						<div className="flex items-center md:hidden">
							<button
								className="w-10 h-10 mr-2 cursor-pointer hover:bg-accent hover:text-accent-foreground"
								onClick={toggleTheme}>
								{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
							</button>
							<button
								className="w-10 h-10 mr-2 cursor-pointer hover:bg-accent hover:text-accent-foreground"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
								{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				<div
					className={`md:hidden transition-all duration-300 overflow-hidden ${
						isMobileMenuOpen
							? "max-h-screen bg-background/95 backdrop-blur-md"
							: "max-h-0"
					}`}>
					<nav className="flex flex-col p-4 space-y-4">
						{navLinks.map((link) => (
							<a
								href={link.href}
								key={link.title}
								className="py-2 transition-colors text-foreground hover:text-primary"
								onClick={() => setIsMobileMenuOpen(false)}>
								{link.title}
							</a>
						))}
					</nav>
				</div>
			</header>
		</>
	);
}
