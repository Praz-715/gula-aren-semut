<!-- src/components/Header.vue -->
<template>
    <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">
            <a href="/" class="logo d-flex align-items-center me-auto">
                <img src="/assets/img/logo.png" alt="">
                <h1 class="sitename">From Nature Future</h1>
            </a>

            <nav id="navmenu" class="navmenu">
                <ul>
                    <li><a href="#hero" :class="{ active: activeItem === 'home' }" @click="setActiveItem('home')">{{
                        translations.header[locale].home }}</a></li>
                    <li><a href="#about" :class="{ active: activeItem === 'about' }" @click="setActiveItem('about')">{{
                        translations.header[locale].about }}</a></li>
                    <li><a href="#poduct" :class="{ active: activeItem === 'features' }"
                            @click="setActiveItem('features')">{{ translations.header[locale].features }}</a></li>
                    <li><a href="#gallery" :class="{ active: activeItem === 'services' }"
                            @click="setActiveItem('services')">{{ translations.header[locale].services }}</a></li>
                    <li><a href="#contact" :class="{ active: activeItem === 'contact' }"
                            @click="setActiveItem('contact')">{{ translations.header[locale].contact }}</a></li>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>


            <div class="d-flex btn-translation">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: isEnglish }" @click="setLanguage(true)"
                            style="padding: 10px 15px;">
                            <span class="fi fi-gb border"></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: !isEnglish }" @click="setLanguage(false)"
                            style="padding: 10px 15px;">
                            <span class="fi fi-id border"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- <a class="btn-getstarted" href="#about">Start Journey</a> -->
        </div>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { translations } from '@/translations/translations.js';
import "flag-icons/css/flag-icons.min.css";

export default {
    name: "Header",
    data() {
        return {
            translations,
            isEnglish: true, // Default ke bahasa Inggris
            locale: 'en',
            activeItem: 'home'
        };
    },
    computed: {
        ...mapState({
            locale: state => state.locale, // Mengambil locale dari Vuex
        }),
    },
    methods: {
        ...mapActions(['changeLocale']),
        setLanguage(isEng) {
            this.isEnglish = isEng;
            const newLocale = this.isEnglish ? 'en' : 'id'; // Menentukan locale baru
            this.locale = newLocale;
            this.changeLocale(newLocale); // Memanggil aksi untuk mengubah locale
            console.log(`Berpindah ke Bahasa ${newLocale === 'en' ? 'Inggris' : 'Indonesia'}`);
        },
        setActiveItem(item) {
            this.activeItem = item;
            // Menambahkan logika untuk mengubah kelas body dan ikon
            document.body.classList.toggle('mobile-nav-active');
            const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
            mobileNavToggleBtn.classList.toggle('bi-list');
            mobileNavToggleBtn.classList.toggle('bi-x');
        },
        toggleMobileNav() {
            // Logika untuk toggle mobile nav jika diperlukan
            document.body.classList.toggle('mobile-nav-active');
            const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
            mobileNavToggleBtn.classList.toggle('bi-list');
            mobileNavToggleBtn.classList.toggle('bi-x');
        }
    }
};
</script>

<style scoped>
@media (max-width: 768px) {
    .nav-tabs {
        position: relative;
        /* z-index: 1; */
        display: flex;
        justify-content: center;
        /* Pastikan elemen berada di tengah */
        padding: 10px 0;
        /* Tambahkan padding jika perlu */
    }

    .nav-item {
        margin: 0 5px;
        /* Jarak antar item */
    }

    .nav-link {
        padding: 10px 15px;
        /* Pastikan padding konsisten */
    }
}

.language-label {
    font-size: 20px;
    /* Atur ukuran ikon sesuai kebutuhan */
    margin-left: 5px;
    /* Memberikan jarak antara ikon dan toggle switch */
}

/* Scoped CSS untuk Toggle Switch */
.language-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--default-color);
    /* Ganti dengan warna default */
    transition: 0.4s;
    border-radius: 20px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: var(--contrast-color);
    /* Ganti dengan warna kontras */
    transition: 0.4s;
    border-radius: 50%;
}

input:checked+.slider {
    background-color: var(--nav-hover-color);
    /* Ganti dengan warna hover nav */
}

input:checked+.slider:before {
    transform: translateX(20px);
}

.slider.round {
    border-radius: 20px;
}

.slider.round:before {
    border-radius: 50%;
}

.language-label {
    font-size: 14px;
    font-weight: bold;
    color: var(--nav-color);
    /* Ganti dengan warna nav */
}
</style>