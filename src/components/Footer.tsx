const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: "Full Wedding Planning", href: "#services" },
            { name: "Design & Décor", href: "#services" },
            { name: "Day-of Coordination", href: "#services" },
            { name: "Destination Events", href: "#services" }
        ],
        company: [
            { name: "About Us", href: "#about" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Press", href: "#press" },
            { name: "Blog", href: "#blog" }
        ],
        contact: [
            { name: "Beverly Hills Studio", href: "#contact" },
            { name: "hello@silversutra.com", href: "mailto:hello@silversutra.com" },
            { name: "+91 81077 27066", href: "tel:+91 81077 27066" },
            { name: "Schedule Consultation", href: "#contact" }
        ]
    };

    return (
        <footer className="bg-charcoal-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="font-playfair text-3xl font-bold text-gradient mb-6">
                            Silver Sutra
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Where luxury meets legacy. Creating extraordinary wedding experiences that celebrate your unique love story with unparalleled elegance and sophistication.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1YLVqXACSN/" className="w-10 h-10 bg-champagne-500 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300">
                                <span className="text-champagne-400 text-sm font-bold">f</span>
                            </a>
                            <a href="https://www.instagram.com/silversutra_/" className="w-10 h-10 bg-champagne-500 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300">
                                <span className="text-champagne-400 text-sm font-bold">@</span>
                            </a>
                            <a href="https://x.com/silver_sutra" className="w-10 h-10 bg-champagne-500 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300">
                                <span className="text-champagne-400 text-sm font-bold">x</span>
                            </a>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="font-playfair text-xl font-bold text-champagne-400 mb-6">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-champagne-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-playfair text-xl font-bold text-champagne-400 mb-6">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-champagne-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h3 className="font-playfair text-xl font-bold text-champagne-400 mb-6">Get In Touch</h3>
                        <ul className="space-y-3 mb-8">
                            {footerLinks.contact.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-champagne-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <h4 className="font-semibold text-white mb-3">Stay Inspired</h4>
                            <p className="text-gray-300 text-sm mb-4">
                                Subscribe to receive luxury wedding inspiration and exclusive insights.
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 bg-charcoal-800 border border-charcoal-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 text-white placeholder-gray-400"
                                />
                                <button className="bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 px-4 py-2 rounded-r-lg font-semibold transition-colors duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-charcoal-700 mt-16 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Silver Sutra. All rights reserved. Crafted with love for love.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-champagne-400 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-champagne-400 transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-champagne-400 transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
