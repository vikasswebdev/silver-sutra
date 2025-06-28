const BlogSection = () => {
    const blogPosts = [
        {
            title: "2024 Luxury Wedding Trends: Timeless Elegance Meets Modern Innovation",
            excerpt: "Discover the emerging trends that are defining luxury weddings this year, from sustainable luxury to intimate grandeur.",
            image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
            category: "Trends",
            readTime: "5 min read",
            date: "March 15, 2024"
        },
        {
            title: "Behind the Scenes: Creating a Destination Wedding in Tuscany",
            excerpt: "Take an exclusive look at the planning process for an enchanting Italian villa wedding that captured hearts worldwide.",
            image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop",
            category: "Behind the Scenes",
            readTime: "8 min read",
            date: "March 8, 2024"
        },
        {
            title: "The Art of Floral Design: Creating Breathtaking Wedding Arrangements",
            excerpt: "Learn about our approach to floral design and how we create arrangements that perfectly complement your wedding vision.",
            image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
            category: "Design",
            readTime: "6 min read",
            date: "February 28, 2024"
        }
    ];

    return (
        <section id="blog" className="py-20 lg:py-32 bg-ivory-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <div className="w-16 h-px bg-champagne-500 mx-auto mb-8"></div>
                    <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
                        Insights & Inspiration
                    </h2>
                    <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed">
                        Explore our thoughts on luxury wedding trends, behind-the-scenes insights, and expert tips for creating unforgettable celebrations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article
                            key={index}
                            className="group cursor-pointer animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="bg-white rounded-lg overflow-hidden hover-lift">
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-champagne-500 text-charcoal-900 px-3 py-1 rounded-full text-xs font-semibold">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center text-sm text-charcoal-500 mb-3">
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="font-playfair text-xl font-bold text-charcoal-900 mb-3 group-hover:text-champagne-700 transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-charcoal-600 leading-relaxed mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-champagne-600 font-semibold text-sm group-hover:text-champagne-700 transition-colors duration-300">
                                        Read More
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;