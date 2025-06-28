import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import the image from assets
// import heroImage from "../assets/hero-image.jpg";
import heroImage from "../assets/amish-thakkar-7O422yG_b80-unsplash.jpg";
import heroImage2 from "../assets/jayesh-jalodara-bWQ6-0c_ZcM-unsplash.jpg";
import heroImage3 from "../assets/amish-thakkar-BEdxXAiRfRM-unsplash.jpg";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: heroImage,
            title: "Your Love Story, Our Masterpiece",
            subtitle: "Crafting the wedding of your dreams with timeless elegance and personalized luxury"
        },
        {
            image: heroImage2,
            title: "Every Moment, Every Detail",
            subtitle: "From the first dance to the last toast, we make your perfect day unforgettable"
        },
        {
            image: heroImage3,
            title: "Where Dreams Become Reality",
            subtitle: "Transforming your vision into a celebration that reflects your unique love story"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    // Debug: Log the current slide image
    useEffect(() => {
        console.log('Current slide image:', slides[currentSlide].image);
    }, [currentSlide, slides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section id="home" className="relative h-screen overflow-hidden bg-gray-900">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 z-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                    </div>
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
                </div>
            ))}

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center text-white max-w-4xl px-6 animate-fade-in">
                    <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light tracking-wide opacity-90">
                        {slides[currentSlide].subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                        >
                            View Our Weddings
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-charcoal-900 font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                        >
                            Start Your Journey
                        </Button>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-champagne-400 transition-colors duration-300"
            >
                <ChevronLeft size={40} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-champagne-400 transition-colors duration-300"
            >
                <ChevronRight size={40} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-champagne-400 scale-110' : 'bg-white bg-opacity-50'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-8 text-white animate-bounce">
                <div className="flex flex-col items-center">
                    <div className="w-px h-12 bg-white opacity-60 mb-2"></div>
                    <span className="text-xs font-light tracking-widest rotate-90 origin-center">SCROLL</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
