import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        guestCount: "",
        budget: "",
        venue: "",
        message: ""
    });

    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Thank you for your inquiry!",
            description: "We'll be in touch within 24 hours to begin planning your extraordinary celebration.",
        });
        setFormData({
            name: "",
            email: "",
            phone: "",
            eventDate: "",
            guestCount: "",
            budget: "",
            venue: "",
            message: ""
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-20 lg:py-32 luxury-gradient">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Information */}
                    <div className="animate-fade-in-up">
                        <div className="w-16 h-px bg-charcoal-800 mb-8"></div>
                        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
                            Let's Create Something Extraordinary
                        </h2>
                        <p className="text-xl text-charcoal-700 mb-8 leading-relaxed">
                            Every love story is unique, and we believe your wedding should be too. Share your vision with us, and let's begin crafting an unforgettable celebration that reflects your journey together.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-champagne-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5 text-champagne-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-charcoal-900 mb-1">Studio Location</h3>
                                    <p className="text-charcoal-700">Beverly Hills, California</p>
                                    <p className="text-charcoal-600 text-sm">Available worldwide for destination events</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-champagne-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5 text-champagne-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-charcoal-900 mb-1">Get In Touch</h3>
                                    <p className="text-charcoal-700">hello@silversutra.com</p>
                                    <p className="text-charcoal-700">(555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-champagne-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5 text-champagne-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-charcoal-900 mb-1">Consultation Hours</h3>
                                    <p className="text-charcoal-700">Monday - Friday: 9AM - 6PM PST</p>
                                    <p className="text-charcoal-600 text-sm">Weekend consultations by appointment</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-ivory-50 rounded-lg p-6">
                            <h3 className="font-playfair text-xl font-bold text-charcoal-900 mb-3">
                                Complimentary Consultation
                            </h3>
                            <p className="text-charcoal-700 mb-4">
                                Book a personalized consultation to discuss your vision and explore how we can bring your dream wedding to life.
                            </p>
                            <Button className="bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 font-semibold">
                                Schedule Consultation
                            </Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-slide-in-right">
                        <form onSubmit={handleSubmit} className="bg-ivory-50 rounded-lg p-8 shadow-lg">
                            <h3 className="font-playfair text-2xl font-bold text-charcoal-900 mb-6">
                                Tell Us About Your Vision
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-charcoal-700 mb-2">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-champagne-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-charcoal-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-champagne-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-charcoal-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-champagne-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-charcoal-700 mb-2">Event Date</label>
                                    <input
                                        type="date"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-champagne-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-charcoal-700 mb-2">Guest Count</label>
                                    <select
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-champagne-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                                    >
                                        <option value="">Select guest count</option>
                                        <option value="intimate">Intimate (Under 50)</option>
                                        <option value="medium">Medium (50-150)</option>
                                        <option value="large">Large (150-300)</option>
                                        <option value="grand">Grand (300+)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-charcoal-700 mb-2">Budget Range</label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-champagne-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="50k-100k">$50,000 - $100,000</option>
                                        <option value="100k-250k">$100,000 - $250,000</option>
                                        <option value="250k-500k">$250,000 - $500,000</option>
                                        <option value="500k+">$500,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-charcoal-700 mb-2">Preferred Venue/Location</label>
                                <input
                                    type="text"
                                    name="venue"
                                    value={formData.venue}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-champagne-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                                    placeholder="Venue or location preference"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-charcoal-700 mb-2">Tell Us About Your Vision</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-champagne-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 focus:border-transparent resize-none"
                                    placeholder="Share your dreams, style preferences, and any special details that are important to you..."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                Send Inquiry
                            </Button>

                            <p className="text-sm text-charcoal-600 mt-4 text-center">
                                We'll respond within 24 hours to begin crafting your extraordinary celebration.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;