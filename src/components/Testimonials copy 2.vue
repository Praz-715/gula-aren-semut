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
                <!-- Swiper Slides -->
                <!-- <div class="swiper-wrapper"> -->
                <Swiper :loop="true" :modules="modules" :slides-per-view="1" :space-between="50" navigation
                    :pagination="{ clickable: false }" @swiper="onSwiper" @slideChange="onSlideChange"
                    :class="swiper - wrapper" :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },

                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }">
                    <!-- <Swiper :loop="true" :modules="modules" :slides-per-view="3" :space-between="50" navigation
                    :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
                    class="swiper - wrapper"> -->
                    <!-- <SwiperSlide :class="swiper-slide">Slide 1</SwiperSlide>
                        <SwiperSlide :class="swiper-slide">Slide 2</SwiperSlide>
                        <SwiperSlide :class="swiper-slide">Slide 3</SwiperSlide> -->



                    <!-- <SwiperSlide :class="swiper - slide">
                        <div class="testimonial-item">
                            <div class="stars">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i>
                            </div>
                            <p>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                suscipit
                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                                aliquam,
                                risus at semper.
                            </p>
                            <div class="profile mt-auto">
                                <img src="/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                            </div>
                        </div>
                    </SwiperSlide> -->

                    <SwiperSlide class="swiper-slide">
                        <div class="testimonial-item">
                            <p>
                                Sertifikat 1
                            </p>
                            <img src="/assets/img/sertifikat/sertifikat1.jpg" class="img-fluid" alt=""
                                @click="openModal('/assets/img/sertifikat/sertifikat1.jpg')" style="cursor: pointer;">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                        <div class="testimonial-item">
                            <p>
                                Sertifikat 2
                            </p>
                            <img src="/assets/img/sertifikat/sertifikat2.jpg" class="img-fluid" alt=""
                                @click="openModal('/assets/img/sertifikat/sertifikat2.jpg')" style="cursor: pointer;">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                        <div class="testimonial-item">
                            <p>
                                Sertifikat 3
                            </p>
                            <img src="/assets/img/sertifikat/sertifikat3.jpg" class="img-fluid" alt=""
                                @click="openModal('/assets/img/sertifikat/sertifikat3.jpg')" style="cursor: pointer;">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                        <div class="testimonial-item">
                            <p>
                                Sertifikat 4
                            </p>
                            <img src="/assets/img/sertifikat/sertifikat4.jpg" class="img-fluid" alt=""
                                @click="openModal('/assets/img/sertifikat/sertifikat4.jpg')" style="cursor: pointer;">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                        <div class="testimonial-item">
                            <p>
                                Sertifikat 5
                            </p>
                            <img src="/assets/img/sertifikat/sertifikat5.jpg" class="img-fluid" alt=""
                                @click="openModal('/assets/img/sertifikat/sertifikat5.jpg')" style="cursor: pointer;">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                        <div class="testimonial-item">
                            <p>
                                Sertifikat 6
                            </p>
                            <img src="/assets/img/sertifikat/sertifikat6.jpg" class="img-fluid" alt=""
                                @click="openModal('/assets/img/sertifikat/sertifikat6.jpg')" style="cursor: pointer;">
                        </div>
                    </SwiperSlide>

                    <!-- <SwiperSlide :class="swiper - slide">
                        <div class="testimonial-item">
                            <div class="stars">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i>
                            </div>
                            <p>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                                veniam
                                duis minim tempor labore quem eram duis noster aute amet eram fore quis sint
                                minim.
                            </p>
                            <div class="profile mt-auto">
                                <img src="/assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                            </div>
                        </div>
                    </SwiperSlide> -->

            
                </Swiper>
                <!-- </div> -->
                <!-- <div id="swiper-pagination"></div> -->
            </div>
        </div>
    </section>
    <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="imageModalLabel">Gambar Sertifikat</h5>
                    <button type="button" class="btn-close" @click="closeModal" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img :src="selectedImage" class="img-fluid" alt="">
                </div>
                <div class="modal-footer">
                    <a :href="selectedImage" download class="btn btn-primary">Download</a>
                    <button type="button" @click="closeModal" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

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
            selectedImage: ''
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
            modules: [Navigation, Pagination, Scrollbar, A11y],
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
</style>