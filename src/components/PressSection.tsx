const PressSection = () => {
    const pressItems = [
        {
            title: "Featured in Vogue Weddings",
            description: "Silver Sutra's innovative approach to luxury wedding design transforms traditional celebrations into extraordinary experiences",
            year: "2024",
            category: "Feature",
            logo: "VOGUE"
        },
        {
            title: "Harper's Bazaar Recognition",
            description: "Top wedding planners redefining elegance in the modern era of celebration",
            year: "2023",
            category: "Award",
            logo: "HARPER'S"
        },
        {
            title: "Martha Stewart Weddings",
            description: "Destination wedding excellence award for creating magical experiences across continents",
            year: "2023",
            category: "Award",
            logo: "MARTHA"
        },
        {
            title: "The Knot Hall of Fame",
            description: "Best of weddings winner for 5 consecutive years, setting industry standards",
            year: "2019-2024",
            category: "Hall of Fame",
            logo: "THE KNOT"
        },
        {
            title: "Brides Magazine Cover Story",
            description: "How Silver Sutra is revolutionizing luxury wedding planning with personalized experiences",
            year: "2024",
            category: "Cover Story",
            logo: "BRIDES"
        },
        {
            title: "Town & Country Weddings",
            description: "The art of creating timeless celebrations that honor tradition while embracing innovation",
            year: "2023",
            category: "Feature",
            logo: "T&C"
        },
        {
            title: "Elle Weddings International",
            description: "Global recognition for excellence in destination and multicultural wedding planning",
            year: "2024",
            category: "International",
            logo: "ELLE"
        },
        {
            title: "Wedding Wire Couples' Choice",
            description: "Consistent 5-star ratings and exceptional client satisfaction across all services",
            year: "2024",
            category: "Choice Award",
            logo: "WEDDINGWIRE"
        }
    ];

    const awards = [
        {
            title: "International Wedding Planner of the Year 2024",
            organization: "Global Wedding Industry Awards",
            category: "Excellence"
        },
        {
            title: "Luxury Lifestyle Awards - Best Wedding Planning 2023",
            organization: "Luxury Lifestyle Awards",
            category: "Luxury"
        },
        {
            title: "WeddingWire Couples' Choice Award 2024",
            organization: "WeddingWire",
            category: "Client Choice"
        },
        {
            title: "Style Me Pretty Featured Vendor",
            organization: "Style Me Pretty",
            category: "Featured"
        },
        {
            title: "The Knot Best of Weddings 2024",
            organization: "The Knot",
            category: "Best of"
        },
        {
            title: "Destination Wedding Specialist Certification",
            organization: "Association of Bridal Consultants",
            category: "Certification"
        },
        {
            title: "Luxury Wedding Planner of the Year 2023",
            organization: "Luxury Wedding Awards",
            category: "Luxury"
        },
        {
            title: "Innovation in Wedding Design Award",
            organization: "Wedding Industry Professionals",
            category: "Innovation"
        }
    ];

    const mediaMentions = [
        {
            platform: "Instagram",
            followers: "2.3M",
            mentions: "500+",
            engagement: "98%"
        },
        {
            platform: "Pinterest",
            followers: "1.8M",
            mentions: "300+",
            engagement: "95%"
        },
        {
            platform: "TikTok",
            followers: "890K",
            mentions: "200+",
            engagement: "92%"
        },
        {
            platform: "YouTube",
            followers: "450K",
            mentions: "150+",
            engagement: "89%"
        }
    ];

    const statistics = [
        { number: "15+", label: "Years of Excellence", icon: "⭐" },
        { number: "500+", label: "Weddings Planned", icon: "💒" },
        { number: "50+", label: "Awards Won", icon: "🏆" },
        { number: "98%", label: "Client Satisfaction", icon: "❤️" },
        { number: "25+", label: "Countries Served", icon: "🌍" },
        { number: "100%", label: "On-Time Delivery", icon: "⏰" }
    ];

    const featuredPublications = [
        { name: "Vogue", logo: "VOGUE", featured: true },
        { name: "Harper's Bazaar", logo: "HARPER'S", featured: true },
        { name: "Martha Stewart", logo: "MARTHA", featured: true },
        { name: "The Knot", logo: "THE KNOT", featured: true },
        { name: "Brides", logo: "BRIDES", featured: true },
        { name: "Town & Country", logo: "T&C", featured: true },
        { name: "Elle", logo: "ELLE", featured: false },
        { name: "Wedding Wire", logo: "WEDDINGWIRE", featured: false },
        { name: "Style Me Pretty", logo: "STYLE", featured: false },
        { name: "Ruffled", logo: "RUFFLED", featured: false }
    ];

    return (
        <section className="py-20 lg:py-32 bg-charcoal-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <div className="w-16 h-px bg-champagne-400 mx-auto mb-8"></div>
                    <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
                        Press & Recognition
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Our commitment to excellence has been recognized by leading publications and industry organizations worldwide, establishing Silver Sutra as a benchmark for luxury wedding planning.
                    </p>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
                    {statistics.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-charcoal-800 rounded-lg p-6 hover:bg-charcoal-700 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-2xl lg:text-3xl font-bold text-champagne-400 mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-white text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    {/* Press Features */}
                    <div className="animate-fade-in-up">
                        <h3 className="font-playfair text-2xl font-bold text-champagne-400 mb-8 flex items-center">
                            <span className="mr-3">📰</span>
                            Featured In
                        </h3>
                        <div className="space-y-6">
                            {pressItems.map((item, index) => (
                                <div key={index} className="border-l-2 border-champagne-500 pl-6 hover:border-champagne-400 transition-colors duration-300 group">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-white text-lg group-hover:text-champagne-300 transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <div className="flex items-center mt-1">
                                                <span className="text-xs bg-champagne-500 text-charcoal-900 px-2 py-1 rounded-full font-medium">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-champagne-400 text-sm font-medium ml-4">{item.year}</span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards */}
                    <div className="animate-slide-in-right">
                        <h3 className="font-playfair text-2xl font-bold text-champagne-400 mb-8 flex items-center">
                            <span className="mr-3">🏆</span>
                            Awards & Honors
                        </h3>
                        <div className="space-y-4">
                            {awards.map((award, index) => (
                                <div key={index} className="flex items-start p-4 bg-charcoal-800 rounded-lg hover:bg-charcoal-700 transition-all duration-300 group">
                                    <div className="w-2 h-2 bg-champagne-500 rounded-full mr-4 mt-2 flex-shrink-0 group-hover:bg-champagne-400 transition-colors duration-300"></div>
                                    <div className="flex-1">
                                        <span className="text-white font-medium">{award.title}</span>
                                        <div className="text-gray-400 text-sm mt-1">{award.organization}</div>
                                        <span className="text-xs bg-charcoal-700 text-champagne-400 px-2 py-1 rounded-full mt-2 inline-block">
                                            {award.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-gradient-to-r from-champagne-500 to-champagne-400 rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-center">
                                <div className="text-4xl font-playfair font-bold text-charcoal-900 mb-2">98%</div>
                                <div className="text-charcoal-800 font-medium">Client Satisfaction Rate</div>
                                <div className="text-charcoal-700 text-sm mt-1">Based on 500+ reviews</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Impact */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="font-playfair text-3xl font-bold text-champagne-400 mb-4">
                            Social Media Presence
                        </h3>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Our work has captured the hearts of millions across social media platforms, inspiring couples worldwide.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {mediaMentions.map((platform, index) => (
                            <div key={index} className="bg-charcoal-800 rounded-lg p-6 text-center hover:bg-charcoal-700 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="text-2xl mb-3">
                                    {platform.platform === 'Instagram' && '📸'}
                                    {platform.platform === 'Pinterest' && '📌'}
                                    {platform.platform === 'TikTok' && '🎵'}
                                    {platform.platform === 'YouTube' && '📺'}
                                </div>
                                <div className="text-xl font-bold text-champagne-400 mb-1">{platform.followers}</div>
                                <div className="text-white text-sm mb-2">Followers</div>
                                <div className="text-gray-400 text-xs">
                                    {platform.mentions} mentions • {platform.engagement} engagement
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logo Showcase */}
                <div className="pt-16 border-t border-charcoal-700">
                    <div className="text-center mb-12">
                        <h3 className="font-playfair text-3xl font-bold text-champagne-400 mb-4">As Seen In</h3>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Trusted by the world's most prestigious publications and media outlets
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                        {featuredPublications.slice(0, 5).map((brand, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-charcoal-800 rounded-lg p-6 hover:bg-charcoal-700 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="text-white font-playfair text-lg font-bold tracking-wide mb-2">
                                        {brand.name}
                                    </div>
                                    {brand.featured && (
                                        <div className="text-xs text-champagne-400 font-medium">Featured</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {featuredPublications.slice(5).map((brand, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-charcoal-800/50 rounded-lg p-6 hover:bg-charcoal-700 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="text-gray-400 font-playfair text-lg font-bold tracking-wide">
                                        {brand.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <div className="inline-block bg-gradient-to-r from-champagne-500 to-champagne-400 rounded-full px-8 py-4">
                        <p className="text-charcoal-900 font-medium">
                            Ready to create your own story?
                            <a href="#contact" className="text-charcoal-900 hover:text-charcoal-800 ml-2 font-semibold transition-colors duration-300">
                                Let's make headlines together →
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PressSection;
