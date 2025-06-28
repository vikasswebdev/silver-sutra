const AboutSection = () => {
    return (
        <section id="about" className="py-20 lg:py-32 bg-ivory-50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-fade-in-up">
                        <div className="w-16 h-px bg-champagne-500 mb-8"></div>
                        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
                            Celebrating Love Through Indian Traditions
                        </h2>
                        <p className="text-lg text-charcoal-700 mb-6 leading-relaxed">
                            At Silver Sutra, we honor the rich tapestry of Indian wedding traditions, where every ceremony tells a story of love, family, and cultural heritage. From the vibrant colors of the mehendi ceremony to the sacred vows of the pheras, we craft celebrations that honor both tradition and personal dreams.
                        </p>
                        <p className="text-lg text-charcoal-700 mb-8 leading-relaxed">
                            Our expertise spans the diverse spectrum of Indian weddings - from intimate Arya Samaj ceremonies to grand destination celebrations. We understand the significance of each ritual, from the haldi ceremony that blesses the couple to the emotional bidai that marks new beginnings.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-playfair font-bold text-champagne-600 mb-2">300+</div>
                                <div className="text-sm text-charcoal-600 uppercase tracking-wide">Indian Weddings</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-playfair font-bold text-champagne-600 mb-2">12+</div>
                                <div className="text-sm text-charcoal-600 uppercase tracking-wide">Years of Excellence</div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-champagne-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-champagne-600 font-bold">SS</span>
                            </div>
                            <div>
                                <div className="font-semibold text-charcoal-900">Sophia Sterling</div>
                                <div className="text-sm text-charcoal-600">Founder & Cultural Wedding Specialist</div>
                            </div>
                        </div>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="relative">
                            <div className="aspect-1 bg-charcoal-900 rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1635919254233-38ea27301900?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Sophia Sterling - Founder"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 luxury-gradient rounded-lg opacity-20"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blush-200 rounded-lg opacity-30"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;