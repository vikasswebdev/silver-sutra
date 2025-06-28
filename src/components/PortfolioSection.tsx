import { useState } from "react";

const PortfolioSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", name: "All Events" },
        { id: "luxury", name: "Luxury Weddings" },
        { id: "cultural", name: "Cultural Celebrations" },
        { id: "vibrant", name: "Vibrant Themes" }
    ];

    const portfolioItems = [
        {
            id: 1,
            title: "Ethereal Garden Romance",
            category: "luxury",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
            description: "A breathtaking celebration with artistic floral sculptures"
        },
        {
            id: 2,
            title: "Cultural Elegance",
            category: "cultural",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
            description: "Traditional celebration with modern luxury touches"
        },
        {
            id: 3,
            title: "Pink & Orange Splendor",
            category: "vibrant",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
            description: "Vibrant colors creating unforgettable memories"
        },
        {
            id: 4,
            title: "Rainbow Rush Celebration",
            category: "vibrant",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
            description: "A kaleidoscope of colors and joyous celebration"
        },
        {
            id: 5,
            title: "Metropolitan Grandeur",
            category: "luxury",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
            description: "Urban sophistication meets classic elegance"
        },
        {
            id: 6,
            title: "Historic Estate Romance",
            category: "luxury",
            image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop",
            description: "Timeless elegance in a heritage setting"
        }
    ];

    const filteredItems = selectedCategory === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory);

    return (
        <section id="portfolio" className="py-20 lg:py-32 bg-ivory-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <div className="w-16 h-px bg-champagne-500 mx-auto mb-8"></div>
                    <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
                        Portfolio
                    </h2>
                    <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed mb-12">
                        Each celebration is a unique masterpiece, carefully crafted to reflect the couple's love story through exquisite design and flawless execution.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-champagne-500 text-charcoal-900'
                                    : 'bg-ivory-200 text-charcoal-700 hover:bg-champagne-100'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-charcoal-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-playfair text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm opacity-90">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                        View Complete Portfolio
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
