import { useState, useEffect } from "react";

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            quote: "Silver Sutra turned our vision into an enchanting reality that exceeded our wildest dreams. Every detail was perfectly orchestrated with such elegance and sophistication.",
            author: "Isabella & Michael Rodriguez",
            event: "Destination Wedding in Tuscany",
            image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop",
            rating: 5
        },
        {
            quote: "The attention to detail was extraordinary. From the floral arrangements to the seamless coordination, everything was absolutely perfect. We couldn't have asked for a more magical day.",
            author: "Charlotte & James Windsor",
            event: "Garden Estate Wedding",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
            rating: 5
        },
        {
            quote: "Working with Silver Sutra was the best decision we made. Their creativity, professionalism, and dedication to excellence made our wedding an unforgettable celebration of our love.",
            author: "Aria & Sebastian Chen",
            event: "Luxury City Wedding",
            image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
            rating: 5
        },
        {
            quote: "Our intimate elopement was transformed into a fairytale. The team's ability to create such magic in a small setting was truly remarkable. Every moment felt personal and perfect.",
            author: "Emma & Alexander Thompson",
            event: "Intimate Elopement in Santorini",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
            rating: 5
        },
        {
            quote: "As a same-sex couple, we were nervous about finding the right planner. Silver Sutra not only embraced our vision but elevated it beyond our expectations. Our celebration was pure joy.",
            author: "Sophia & Olivia Martinez",
            event: "Rainbow Garden Wedding",
            image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
            rating: 5
        },
        {
            quote: "Our multicultural wedding was a beautiful blend of traditions. The team's cultural sensitivity and creativity made both families feel honored and celebrated.",
            author: "Priya & David O'Connor",
            event: "Indo-Irish Fusion Wedding",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
            rating: 5
        },
        {
            quote: "When our original venue cancelled two weeks before the wedding, Silver Sutra worked miracles. They found us an even more beautiful location and made the transition seamless.",
            author: "Grace & William Anderson",
            event: "Last-Minute Venue Change Success",
            image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
            rating: 5
        },
        {
            quote: "Our destination wedding in Bali was flawless. The team's international expertise and local connections ensured everything went perfectly, even from thousands of miles away.",
            author: "Maya & Christopher Park",
            event: "Destination Wedding in Bali",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
            rating: 5
        }
    ];

    const featuredTestimonials = [
        {
            quote: "Silver Sutra didn't just plan our wedding—they created an experience that our guests are still talking about a year later. The level of service was beyond anything we could have imagined.",
            author: "Victoria & Nicholas Blackwood",
            event: "Luxury Estate Wedding",
            highlight: "Featured in Vogue Weddings"
        },
        {
            quote: "From our first consultation to the last dance, every interaction was marked by professionalism and genuine care. They truly became part of our family throughout the process.",
            author: "Sarah & Daniel Reynolds",
            event: "Intimate Family Wedding",
            highlight: "Featured in Martha Stewart Weddings"
        }
    ];

    const stats = [
        { number: "500+", label: "Weddings Planned" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "15+", label: "Years of Experience" },
        { number: "50+", label: "Awards Won" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-champagne-400' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-fixed transition-all duration-1000"
                    style={{ backgroundImage: `url(${testimonials[currentTestimonial].image})` }}
                >
                    <div className="absolute inset-0 bg-charcoal-900 bg-opacity-80"></div>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <div className="w-16 h-px bg-champagne-400 mx-auto mb-8"></div>
                    <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
                        What Our Couples Say
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Real stories from couples who entrusted us with their most precious moments
                    </p>
                </div>

                {/* Main Testimonial Carousel */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="text-center animate-fade-in-up">
                        <div className="mb-8">
                            <svg
                                className="w-12 h-12 text-champagne-400 mx-auto mb-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <blockquote className="text-xl lg:text-2xl text-white font-light leading-relaxed mb-8 italic">
                                "{testimonials[currentTestimonial].quote}"
                            </blockquote>
                        </div>

                        <div className="border-t border-champagne-400 border-opacity-30 pt-8">
                            <div className="flex justify-center mb-3">
                                {renderStars(testimonials[currentTestimonial].rating)}
                            </div>
                            <div className="text-champagne-400 font-semibold text-lg mb-1">
                                {testimonials[currentTestimonial].author}
                            </div>
                            <div className="text-gray-300 text-sm">
                                {testimonials[currentTestimonial].event}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Indicators */}
                <div className="flex justify-center space-x-3 mb-20">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                ? 'bg-champagne-400 scale-110'
                                : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                                }`}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-champagne-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-white text-sm lg:text-base">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Testimonials */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                            Featured Stories
                        </h3>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Celebrated weddings that captured hearts and made headlines
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredTestimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-champagne-400/20">
                                <div className="flex justify-center mb-4">
                                    {renderStars(5)}
                                </div>
                                <blockquote className="text-white font-light leading-relaxed mb-6 italic">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="border-t border-champagne-400/30 pt-4">
                                    <div className="text-champagne-400 font-semibold mb-1">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-gray-300 text-sm mb-2">
                                        {testimonial.event}
                                    </div>
                                    <div className="text-champagne-300 text-xs font-medium">
                                        {testimonial.highlight}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-champagne-400/20">
                    <div className="text-center mb-8">
                        <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                            Trusted by Couples Worldwide
                        </h3>
                        <p className="text-gray-300">
                            Join hundreds of happy couples who chose Silver Sutra for their special day
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-champagne-400 mb-2">4.9/5</div>
                            <div className="flex justify-center mb-2">
                                {renderStars(5)}
                            </div>
                            <div className="text-white text-sm">Average Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-champagne-400 mb-2">100%</div>
                            <div className="text-white text-sm">On-Time Delivery</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-champagne-400 mb-2">24/7</div>
                            <div className="text-white text-sm">Support Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
