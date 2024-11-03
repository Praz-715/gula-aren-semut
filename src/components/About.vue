<!-- src/components/About.vue -->
<template>
    <!-- About Section -->
    <section id="about" class="about section">

        <div class="container">

            <div class="row gy-4">

                <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                    <p class="who-we-are">{{ translations.about[locale].p1 }}</p>
                    <h3>{{ translations.about[locale].h3 }}</h3>
                    <p class="fst-italic">
                        {{ translations.about[locale].desc }}
                    </p>
                    <ul v-for="(isi, index) in translations.about[locale].benefit" :key="index">
                        <li><i class="bi bi-check-circle"></i> <span>{{isi}}</span></li>
                    </ul>
                    <!-- <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a> -->
                </div>

                <div class="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
                    <div class="row gy-4">
                        <div class="col-lg-6">
                            <img src="/assets/img/about-company-1.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="col-lg-6">
                            <div class="row gy-4">
                                <div class="col-lg-12">
                                    <img src="/assets/img/about-company-2.jpg" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-12">
                                    <img src="/assets/img/about-company-3.jpg" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section><!-- /About Section -->
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { translations } from '@/translations/translations.js';
export default {
    name: "About",
    data() {
        return {
            translations,
        };
    },
    computed: {
        ...mapState({
            locale: state => state.locale, // Mengambil locale dari Vuex
        }),
    },
};
</script>

<style scoped>
/* Scoped CSS untuk About */
</style>