import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg py-2' : 'bg-transparent py-4'
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="/lovable-uploads/00db1639-c0ac-45ce-956a-f0cf3cc2bf33.png"
                            alt="Silver Sutra Logo"
                            className="h-12 md:h-16 w-auto"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-charcoal-800 hover:text-champagne-500 transition-colors duration-300 font-medium text-sm tracking-wide"
                            >
                                {item.name}
                            </a>
                        ))}
                        <Button className="bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 font-medium px-6 py-2 rounded-full">
                            Start Planning
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col space-y-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`block h-0.5 w-6 bg-charcoal-800 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                            }`}></span>
                        <span className={`block h-0.5 w-6 bg-charcoal-800 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                            }`}></span>
                        <span className={`block h-0.5 w-6 bg-charcoal-800 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                            }`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 glass-effect rounded-lg">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-3 px-4 text-charcoal-800 hover:text-champagne-500 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="px-4 pt-2">
                            <Button className="w-full bg-amber-200 hover:bg-amber-300 text-charcoal-900 font-medium py-2 rounded-full">
                                Start Planning
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
