<!-- src/views/Home.vue -->
<template>
    <div>
        <!-- <h1>kambing</h1> -->
        <Header />
        <main class="main">
            <HeroSection />
            <FeaturedServices />
            <About />
            <!-- <Clients /> -->
            <Features />
            <!-- <FeaturesDetails /> -->
            <Gallery />
            <!-- <MoreFeatures /> -->
            <!-- <Pricing /> -->
            <!-- <FAQ /> -->
            <Testimonials />
            <Contact />
        </main>
        <Footer />
        <!-- Scroll Top -->
        <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

        <!-- Preloader -->
        <div id="preloader"></div>
    </div>
</template>

<script>
import GLightbox from 'glightbox';
import Header from "@/components/Header.vue";
import HeroSection from "@/components/HeroSection.vue";
import FeaturedServices from "@/components/FeaturedServices.vue";
import About from "@/components/About.vue";
import Clients from "@/components/Clients.vue";
import Features from "@/components/Features.vue";
import FeaturesDetails from "@/components/FeaturesDetails.vue";
import Gallery from "@/components/Gallery.vue";
import MoreFeatures from "@/components/MoreFeatures.vue";
import Pricing from "@/components/Pricing.vue";
import FAQ from "@/components/FAQ.vue";
import Testimonials from "@/components/Testimonials.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

import AOS from 'aos';


export default {
    name: 'Home',
    components: {
        Header,
        HeroSection,
        FeaturedServices,
        About,
        Clients,
        Features,
        FeaturesDetails,
        Gallery,
        MoreFeatures,
        Pricing,
        FAQ,
        Testimonials,
        Contact,
        Footer,
    },

    mounted() {
        document.body.classList.add('index-page');

        const preloader = document.querySelector('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.remove();
            });
        }
        /**
         * Toggle Scrolled Class on Body
         */
        const toggleScrolled = () => {
            const selectBody = document.querySelector('body');
            const selectHeader = document.querySelector('#header');
            if (!selectHeader.classList.contains('scroll-up-sticky') &&
                !selectHeader.classList.contains('sticky-top') &&
                !selectHeader.classList.contains('fixed-top')) return;
            window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
        };
        document.addEventListener('scroll', toggleScrolled);
        window.addEventListener('load', toggleScrolled);

        /**
         * Mobile Nav Toggle
         */
        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
        const mobileNavToggle = () => {
            document.body.classList.toggle('mobile-nav-active');
            mobileNavToggleBtn.classList.toggle('bi-list');
            mobileNavToggleBtn.classList.toggle('bi-x');
        };
        if (mobileNavToggleBtn) mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

        /**
         * Initiate GLightbox
         */
        GLightbox({ selector: '.glightbox' });

        /**
         * Initiate AOS
         */
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });

        // /**
        //  * Init Swiper
        //  */
        // const initSwiper = () => {
        //     document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
        //         let config = JSON.parse(
        //             swiperElement.querySelector(".swiper-config").innerHTML.trim()
        //         );
        //         new Swiper(swiperElement, config);
        //     });
        // };
        // window.addEventListener("load", initSwiper);

        /**
         * Frequently Asked Questions Toggle
         */
        document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
            faqItem.addEventListener('click', () => {
                faqItem.parentNode.classList.toggle('faq-active');
            });
        });

        /**
         * Scroll Top Button
         */
        const scrollTopButton = document.querySelector('.scroll-top');
        const toggleScrollTop = () => {
            if (scrollTopButton) {
                window.scrollY > 100 ? scrollTopButton.classList.add('active') : scrollTopButton.classList.remove('active');
            }
        };
        scrollTopButton?.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);
    }
};
</script>
