<!-- src/components/Testimonials.vue -->
<template>
    <section id="testimonials" class="testimonials section light-background">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Certification</h2>
            <!-- <p></p> -->
        </div>
        <!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper init-swiper">
                <Swiper :loop="true" :modules="modules" :slides-per-view="1" :space-between="50"
                    :pagination="{ clickable: false }" @swiper="onSwiper" @slideChange="onSlideChange" class="clients"
                    :autoplay="{
                        delay: 1000,
                        disableOnInteraction: false,
                    }" :breakpoints="{
                        '320': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        '480': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        '640': {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },

                        '1024': {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }">
                    <SwiperSlide class="swiper-slide client-logo" v-for="(client, index) in clients" :key="index">
                        <img :src="client.img" alt="" class="img-fluid">
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
    <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="imageModalLabel">Gambar Sertifikat</h5>
                    <button type="button" class="btn-close" @click="closeModal" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img :src="selectedImage" class="img-fluid" alt="">
                </div>
                <div class="modal-footer">
                    <a :href="selectedImage" download class="btn btn-primary">Download</a>
                    <button type="button" @click="closeModal" class="btn btn-secondary"
                        data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    name: 'Testimonials',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            selectedImage: '',
            clients: [
                { img: "assets/img/clients/client-1.png" },
                { img: "assets/img/clients/client-2.png" },
                { img: "assets/img/clients/client-3.png" },
                { img: "assets/img/clients/client-4.png" },
                { img: "assets/img/clients/client-5.png" },
                { img: "assets/img/clients/client-6.png" },
                { img: "assets/img/clients/client-7.png" },
                { img: "assets/img/clients/client-8.png" },
            ],
        };
    },
    methods: {
        openModal(imageSrc) {
            this.selectedImage = imageSrc;
            const modal = document.getElementById('imageModal');
            modal.classList.add('show');
            modal.style.display = 'block';
            modal.setAttribute('aria-hidden', 'false');
        },
        closeModal() {
            const modal = document.getElementById('imageModal');
            modal.classList.remove('show');
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
        };
    },

    // mounted() {
    //     // Swiper configuration
    //     const config = {
    //         loop: true,
    //         speed: 600,
    //         autoplay: {
    //             delay: 5000,
    //         },
    //         slidesPerView: 'auto',
    //         pagination: {
    //             el: '#swiper-pagination',
    //             type: 'bullets',
    //             clickable: true,
    //         },
    //         breakpoints: {
    //             320: {
    //                 slidesPerView: 1,
    //                 spaceBetween: 40,
    //             },
    //             1200: {
    //                 slidesPerView: 3,
    //                 spaceBetween: 1,
    //             },
    //         },
    //     };

    //     // Initialize Swiper instance
    //     const initSwiper = () => {
    //         document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
    //             new Swiper(swiperElement, config);
    //         });
    //     };

    //     window.addEventListener('load', initSwiper);
    // },
};
</script>

<style scoped>
/* Add your custom styles here if needed */

/*--------------------------------------------------------------
# Clients Section
--------------------------------------------------------------*/
</style>