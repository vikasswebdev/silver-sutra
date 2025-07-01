const BlogSection = () => {
    const blogPosts = [
        {
            title: "Intimate Luxury: The Rise of Micro-Weddings with Maximum Impact",
            excerpt: "Smaller guest lists don't mean smaller dreams. Explore how couples are creating intimate celebrations that pack an emotional punch while maintaining the luxury experience they deserve.",
            image: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Trends",
            readTime: "4 min read",
            date: "February 20, 2024"
        },
        {
            title: "Sustainable Luxury: How Eco-Conscious Choices Enhance Your Wedding",
            excerpt: "Luxury and sustainability can coexist beautifully. Discover how thoughtful choices in decor, catering, and venue selection can create a celebration that's both stunning and environmentally responsible.",
            image: "https://images.unsplash.com/photo-1583878545126-2f1ca0142714?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Sustainability",
            readTime: "7 min read",
            date: "February 12, 2024"
        },
        {
            title: "The Psychology of Wedding Design: Creating Emotional Connections",
            excerpt: "Every design choice in your wedding should evoke emotion and create lasting memories. Learn how color psychology, lighting, and spatial design work together to craft an unforgettable experience.",
            image: "https://images.unsplash.com/photo-1610173826608-bd1f53a52db1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Design",
            readTime: "6 min read",
            date: "February 5, 2024"
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
                        Explore our thoughts on luxury wedding trends, behind-the-scenes insights, and expert tips for creating unforgettable celebrations that reflect your unique love story.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article
                            key={index}
                            className="group cursor-pointer animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="bg-white rounded-lg overflow-hidden hover-lift shadow-sm hover:shadow-lg transition-all duration-300">
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
                                    {/* <div className="flex items-center text-sm text-charcoal-500 mb-3">
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.readTime}</span>
                                    </div> */}

                                    <h3 className="font-playfair text-xl font-bold text-charcoal-900 mb-3 group-hover:text-champagne-700 transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-charcoal-600 leading-relaxed mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    {/* 
                                    <div className="flex items-center text-champagne-600 font-semibold text-sm group-hover:text-champagne-700 transition-colors duration-300">
                                        Read More
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                {/* 
                <div className="text-center mt-16">
                    <button className="bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                        View All Articles
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default BlogSection;