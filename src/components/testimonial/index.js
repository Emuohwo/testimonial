import React from 'react';
import Header from './headers'
import TestimonialHero from './testimonial_hero';
import CustomerBanner from './customerBanner';
import CustomersTestimonials from './customers/index'
import NewsLetter from './newsLetter'
import Footer from '../layout/index';

import VendorsTestimonials from './vendors';

const Testimonial = () => {
    return (
        <>
        <Header />
        <TestimonialHero />
        <CustomerBanner />
        <CustomersTestimonials />

        <VendorsTestimonials />
        <NewsLetter />
        <Footer />
        </>
    )
}

export default Testimonial;
