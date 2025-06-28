const ServicesSection = () => {
    const services = [
        {
            title: "Full Wedding Planning",
            description: "Comprehensive planning from conception to celebration, ensuring every detail reflects your vision with luxury and precision.",
            features: ["12-month planning timeline", "Vendor coordination", "Budget management", "Timeline creation", "Guest list management", "Wedding website design"]
        },
        {
            title: "Design & Décor",
            description: "Artistic curation of breathtaking environments that tell your love story through exquisite design and thoughtful details.",
            features: ["Custom design concepts", "Floral arrangements", "Lighting design", "Luxury linens & tableware", "Ceremony & reception styling", "Personalized signage"]
        },
        {
            title: "Day-of Coordination",
            description: "Seamless execution of your perfect day, allowing you to be fully present while we orchestrate every moment flawlessly.",
            features: ["Timeline management", "Vendor coordination", "Guest assistance", "Emergency handling", "Ceremony rehearsal", "Reception flow management"]
        },
        {
            title: "Destination Events",
            description: "Extraordinary celebrations in the world's most stunning locations, creating unforgettable experiences for you and your guests.",
            features: ["Location scouting", "Travel coordination", "Local vendor network", "Cultural integration", "Guest accommodation", "Transportation logistics"]
        },
        {
            title: "Intimate & Elopement Planning",
            description: "Bespoke experiences for intimate celebrations, focusing on meaningful moments and authentic connections.",
            features: ["Private ceremony planning", "Photography coordination", "Romantic venue selection", "Personalized experiences", "Legal documentation", "Celebration planning"]
        },
        {
            title: "Cultural & Traditional Ceremonies",
            description: "Honoring your heritage and traditions while creating modern, elegant celebrations that bridge cultures beautifully.",
            features: ["Cultural ceremony design", "Traditional vendor sourcing", "Family consultation", "Custom rituals", "Multi-cultural integration", "Heritage celebration"]
        },
        {
            title: "Luxury Wedding Production",
            description: "Large-scale event production for grand celebrations, managing complex logistics with theatrical precision.",
            features: ["Production management", "Technical coordination", "Large guest management", "Entertainment booking", "Security coordination", "Media management"]
        },
        {
            title: "Post-Wedding Services",
            description: "Continuing our relationship beyond your special day with thoughtful services that complete your wedding journey.",
            features: ["Thank you note assistance", "Photo album design", "Anniversary planning", "Future event consultation", "Vendor feedback", "Memory preservation"]
        }
    ];

    const additionalServices = [
        {
            category: "Specialized Services",
            items: [
                "Bridal party coordination",
                "Rehearsal dinner planning",
                "Welcome party organization",
                "Farewell brunch coordination",
                "Honeymoon planning assistance",
                "Wedding insurance guidance"
            ]
        },
        {
            category: "Luxury Enhancements",
            items: [
                "Champagne service coordination",
                "Luxury transportation booking",
                "VIP guest experience",
                "Exclusive venue access",
                "Celebrity chef coordination",
                "Live entertainment booking"
            ]
        },
        {
            category: "Technology & Innovation",
            items: [
                "Virtual wedding planning",
                "Live streaming coordination",
                "Digital guest management",
                "Wedding app development",
                "Social media coordination",
                "Drone photography coordination"
            ]
        }
    ];

    return (
        <section id="services" className="py-20 lg:py-32 luxury-gradient">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <div className="w-16 h-px bg-charcoal-800 mx-auto mb-8"></div>
                    <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
                        Our Services
                    </h2>
                    <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed">
                        From intimate gatherings to grand celebrations, we offer a comprehensive suite of services designed to bring your wedding vision to life with uncompromising luxury and attention to detail.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-ivory-50 rounded-lg p-8 hover-lift hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start">
                                <div className="w-2 h-16 bg-champagne-500 rounded-full mr-6 group-hover:bg-champagne-600 transition-colors duration-300"></div>
                                <div className="flex-1">
                                    <h3 className="font-playfair text-2xl font-bold text-charcoal-900 mb-4 group-hover:text-champagne-700 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-charcoal-700 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-charcoal-600">
                                                <div className="w-1.5 h-1.5 bg-champagne-500 rounded-full mr-3"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="font-playfair text-3xl font-bold text-charcoal-900 mb-4">
                            Specialized Offerings
                        </h3>
                        <p className="text-lg text-charcoal-700 max-w-2xl mx-auto">
                            Beyond our core services, we provide specialized offerings to ensure every aspect of your celebration is perfectly executed.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {additionalServices.map((category, index) => (
                            <div key={index} className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-champagne-200">
                                <h4 className="font-playfair text-xl font-bold text-charcoal-900 mb-4 text-center">
                                    {category.category}
                                </h4>
                                <ul className="space-y-2">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-sm text-charcoal-700 flex items-center">
                                            <div className="w-1 h-1 bg-champagne-400 rounded-full mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="font-playfair text-3xl font-bold text-charcoal-900 mb-4">
                            Our Process
                        </h3>
                        <p className="text-lg text-charcoal-700 max-w-2xl mx-auto">
                            A carefully crafted approach that ensures your vision becomes reality with precision and elegance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery",
                                description: "We begin with an intimate consultation to understand your vision, style, and dreams for your perfect day."
                            },
                            {
                                step: "02",
                                title: "Design",
                                description: "Our creative team develops a comprehensive design concept that reflects your unique love story."
                            },
                            {
                                step: "03",
                                title: "Execution",
                                description: "We meticulously coordinate every detail, ensuring flawless execution of your celebration."
                            },
                            {
                                step: "04",
                                title: "Celebration",
                                description: "On your special day, we orchestrate every moment so you can be fully present and enjoy every second."
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-champagne-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="font-playfair text-xl font-bold text-white">{process.step}</span>
                                </div>
                                <h4 className="font-playfair text-xl font-bold text-charcoal-900 mb-3">
                                    {process.title}
                                </h4>
                                <p className="text-charcoal-700 text-sm leading-relaxed">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Investment Section */}
                <div className="bg-ivory-50 rounded-lg p-8 mb-20">
                    <div className="text-center mb-8">
                        <h3 className="font-playfair text-3xl font-bold text-charcoal-900 mb-4">
                            Investment & Packages
                        </h3>
                        <p className="text-lg text-charcoal-700 max-w-2xl mx-auto">
                            We offer flexible packages designed to meet your specific needs and budget, ensuring every couple can experience our luxury service.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Essence",
                                description: "Perfect for intimate celebrations",
                                features: ["Day-of coordination", "Basic design consultation", "Vendor recommendations", "Timeline creation"]
                            },
                            {
                                name: "Signature",
                                description: "Our most popular comprehensive package",
                                features: ["Full planning service", "Custom design concept", "Vendor coordination", "Month-of coordination", "Budget management"]
                            },
                            {
                                name: "Luxury",
                                description: "Ultimate luxury experience",
                                features: ["Full planning + design", "Luxury vendor access", "Personal concierge", "Unlimited consultations", "Luxury enhancements"]
                            }
                        ].map((package_, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 border border-champagne-200">
                                <h4 className="font-playfair text-2xl font-bold text-charcoal-900 mb-2">
                                    {package_.name}
                                </h4>
                                <p className="text-charcoal-700 mb-4 text-sm">
                                    {package_.description}
                                </p>
                                <ul className="space-y-2">
                                    {package_.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="text-sm text-charcoal-600 flex items-center">
                                            <div className="w-1 h-1 bg-champagne-400 rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <div className="inline-block bg-ivory-50 rounded-full px-8 py-4">
                        <p className="text-charcoal-700 font-medium">
                            Ready to begin your journey?
                            <a href="#contact" className="text-champagne-600 hover:text-champagne-700 ml-2 font-semibold transition-colors duration-300">
                                Let's create something extraordinary together →
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
