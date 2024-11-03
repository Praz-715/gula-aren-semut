<!-- src/components/Header.vue -->
<template>
    <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">
            <a href="/" class="logo d-flex align-items-center me-auto">
                <img src="/assets/img/logo.png" alt="">
                <h1 class="sitename">QuickStart</h1>
            </a>

            <nav id="navmenu" class="navmenu">
                <ul>
                    <li><a href="#hero" class="active">{{ translations[locale].home }}</a></li>
                    <li><a href="#about">{{ translations[locale].about }}</a></li>
                    <li><a href="#features">{{ translations[locale].features }}</a></li>
                    <li><a href="#services">{{ translations[locale].services }}</a></li>
                    <li><a href="#pricing">{{ translations[locale].pricing }}</a></li>
                    <li class="dropdown">
                        <a href="#"><span>{{ translations[locale].dropdown }}</span> <i
                                class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="#">{{ translations[locale].dropdown1 }}</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">{{ translations[locale].contact }}</a></li>
                </ul>
                <!-- <ul>
                    <li><a href="#hero" class="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li class="dropdown">
                        <a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="#">Dropdown 1</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                </ul> -->
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <!-- Tambahkan Toggle Switch Bahasa -->
            <div class="language-toggle ms-3">
                <label class="switch">
                    <input type="checkbox" @click="toggleLanguage" v-model="isEnglish">
                    <span class="slider round"></span>
                </label>
                <span class="language-label">{{ isEnglish ? 'EN' : 'ID' }}</span>
            </div>

            <a class="btn-getstarted" href="#about">Get Started</a>
        </div>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { translations } from '@/translations/translations.js';

export default {
    name: "Header",
    data() {
        return {
            translations,
            isEnglish: true, // Default ke bahasa Inggris
        };
    },
    computed: {
        ...mapState({
            locale: state => state.locale, // Mengambil locale dari Vuex
        }),
    },
    methods: {
        ...mapActions(['changeLocale']),
        toggleLanguage() {
            const newLocale = this.locale === 'en' ? 'id' : 'en'; // Menentukan locale baru
            this.changeLocale(newLocale); // Memanggil aksi untuk mengubah locale
            console.log(`Berpindah ke Bahasa ${newLocale === 'en' ? 'Inggris' : 'Indonesia'}`);
        },
    },
    // methods: {
    //     toggleLanguage() {
    //         this.isEnglish = !this.isEnglish;
    //         if (this.isEnglish) {
    //             console.log("Berpindah ke Bahasa Inggris");
    //             // Tambahkan logika untuk mengganti konten ke bahasa Inggris
    //         } else {
    //             console.log("Berpindah ke Bahasa Indonesia");
    //             // Tambahkan logika untuk mengganti konten ke bahasa Indonesia
    //         }
    //     },
    // },
};
</script>

<style scoped>
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
    background-color: #ccc;
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
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked+.slider {
    background-color: #2196F3;
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
}
</style>