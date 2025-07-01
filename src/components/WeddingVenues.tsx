import React, { useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from './ui/carousel';
import { Button } from './ui/button';
import { sendWeddingEnquiryEmail } from '@/lib/emailjs';
import { useToast } from '@/hooks/use-toast';

const venues = [
    {
        name: 'The Oberoi Udaivilas',
        image: 'https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-udaivilas-udaipur/overview/overview-banners/1920-x-819-new.jpg?extension=webp',
        url: 'https://www.oberoihotels.com/hotels-in-udaipur-udaivilas-resort/',
    },
    {
        name: 'Taj Lalit Bagh',
        image: 'https://cdn.sanity.io/images/ocl5w36p/prod5/7fd8a372c3f5a0b32c4ee6709362090bd40805d8-7360x4912.jpg',
        url: 'https://www.tajhotels.com/en-in/destination/hotels-in-udaipur',
    },
    {
        name: 'Holymont Udaipur',
        image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202409152034538052-df756af2-85d6-4d5a-926c-fecf2b0a3e54.jpg',
        url: 'https://www.makemytrip.com/hotels/holymont_udaipur-details-udaipur.html',
    },
];

const WeddingVenues = () => {
    const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await sendWeddingEnquiryEmail(form);

            if (result.success) {
                toast({
                    title: "Enquiry submitted successfully!",
                    description: "We'll be in touch within 24 hours to discuss your wedding plans.",
                });
                setForm({ name: '', email: '', mobile: '', message: '' });
            } else {
                toast({
                    title: "Something went wrong",
                    description: "Please try again or contact us directly at hello@silversutra.com",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            toast({
                title: "Something went wrong",
                description: "Please try again or contact us directly at hello@silversutra.com",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative py-20 lg:py-32 bg-charcoal-900 overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start relative z-10">
                {/* Left: Venues Slider */}
                <div className="flex-1 w-full lg:pr-12">
                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white animate-fade-in">
                        <span className="bg-champagne-500 text-charcoal-900 rounded-lg px-4 py-2 shadow-lg">Wedding Venues</span>
                    </h2>
                    <div className="relative">
                        <Carousel className="w-full">
                            <CarouselContent className="">
                                {venues.map((venue) => (
                                    <CarouselItem key={venue.name} className="basis-1/1 md:basis-1/2 lg:basis-1/3 px-2" onClick={() => window.open(venue.url, '_blank')}>
                                        <div className="bg-charcoal-800 rounded-3xl overflow-hidden shadow-xl hover-lift transition-all duration-300 flex flex-col items-center">
                                            <img
                                                src={venue.image}
                                                alt={venue.name}
                                                className="w-full h-80 object-cover object-center"
                                            />
                                            <div className="py-6 text-center text-2xl font-semibold text-white font-playfair">
                                                {venue.name}
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-8 bg-champagne-500 text-charcoal-900 hover:bg-champagne-600" />
                            <CarouselNext className="-right-8 bg-champagne-500 text-charcoal-900 hover:bg-champagne-600" />
                        </Carousel>
                        {/* Dots */}
                        <div className="flex justify-center mt-8 gap-3">
                            {venues.map((_, idx) => (
                                <div
                                    key={idx}
                                    className="w-6 h-2 rounded-full transition-all duration-300"
                                    style={{
                                        background: `linear-gradient(90deg, #eac88c 0%, #f2dcB4 100%)`,
                                        opacity: 1,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Right: Enquiry Form */}
                <div className="w-full max-w-lg mx-auto lg:mx-0 animate-fade-in-up">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-champagne-500 rounded-lg p-10 flex flex-col gap-6 shadow-2xl"
                    >
                        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                            Wedding <span className="text-charcoal-900">Enquiry</span>
                        </h3>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="px-5 py-4 rounded-md text-lg bg-white/80 focus:bg-white outline-none border-none placeholder-charcoal-400 text-charcoal-900"
                            required
                        />
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            type="email"
                            className="px-5 py-4 rounded-md text-lg bg-white/80 focus:bg-white outline-none border-none placeholder-charcoal-400 text-charcoal-900"
                            required
                        />
                        <input
                            name="mobile"
                            value={form.mobile}
                            onChange={handleChange}
                            placeholder="Mobile"
                            className="px-5 py-4 rounded-md text-lg bg-white/80 focus:bg-white outline-none border-none placeholder-charcoal-400 text-charcoal-900"
                            required
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows={3}
                            className="px-5 py-4 rounded-md text-lg bg-white/80 focus:bg-white outline-none border-none placeholder-charcoal-400 text-charcoal-900"
                            required
                        />
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-charcoal-900 hover:bg-charcoal-800 text-champagne-400 text-xl font-bold py-3 rounded-md mt-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "SENDING..." : "SUBMIT"}
                        </Button>
                    </form>
                </div>
            </div>
            {/* Background overlay for luxury look */}
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/90 via-charcoal-900/80 to-champagne-200/30 pointer-events-none z-0" />
        </section>
    );
};

export default WeddingVenues;