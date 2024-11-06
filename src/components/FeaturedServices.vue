<template>
  <section id="featured-services" class="featured-services section light-background">
    <div class="container">
      <div class="row">
        <div class="col" v-for="(service, index) in services" :key="index">
          <div v-if="service.title === 'Halal'" class="service-item d-flex flex-column align-items-center"
            @mouseover="showHaqiqi" @mouseout="hideHaqiqi">
            <div class="icon flex-shrink-0">
              <i class="img-container">
                <img src="/assets/img/halalan-toyiban.png" class="toyiban" alt="">
                <img src="/assets/img/halalan-haqiqi.png" class="haqiqi" alt="">
              </i>
            </div>
            <h4 class="text-center mt-2"><a class="stretched-link">{{ service.title }}</a></h4>
          </div>
          <div v-else-if="service.title === '100% Oraganic'" class="service-item d-flex flex-column align-items-center"
            @mouseover="showNature" @mouseout="hideNature">
            <div class="icon flex-shrink-0">
              <i class="img-container">
                <img src="/assets/img/nature.png" class="naturekampret" alt="">
                <img src="/assets/img/nature-2.png" class="naturekampret-white" alt="">
              </i>
            </div>
            <h4 class="text-center mt-2"><a class="stretched-link">{{ service.title }}</a></h4>
          </div>
          <div v-else class="service-item d-flex flex-column align-items-center">
            <div class="icon flex-shrink-0">
              <i :class="service.icon"></i>
            </div>
            <h4 class="text-center mt-2"><a class="stretched-link">{{ service.title }}</a></h4>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedServices",
  data() {
    return {
      services: [
        { icon: "bi bi-stars", title: "Hygiene" },
        { icon: "bi bi-card-checklist", title: "Halal" },
        { icon: "bi bi-shield-check", title: "High Quality" },
        { icon: "bi bi-shield-check", title: "100% Oraganic" },
      ],
    };
  },
  methods: {
    showHaqiqi(event) {
      const element = event.currentTarget; // Ambil elemen yang memicu event
      const toyibanImg = element.querySelector('.toyiban');
      const haqiqiImg = element.querySelector('.haqiqi');
      toyibanImg.style.display = 'none'; // Sembunyikan gambar toyiban
      haqiqiImg.style.display = 'block'; // Tampilkan gambar haqiqi
    },
    hideHaqiqi(event) {
      const element = event.currentTarget; // Ambil elemen yang memicu event
      const toyibanImg = element.querySelector('.toyiban');
      const haqiqiImg = element.querySelector('.haqiqi');
      toyibanImg.style.display = 'block'; // Tampilkan gambar toyiban
      haqiqiImg.style.display = 'none'; // Sembunyikan gambar haqiqi
    },
    showNature(event) {
      const element = event.currentTarget; // Ambil elemen yang memicu event
      const natureBlackImg = element.querySelector('.naturekampret');
      const natureWhiteImg = element.querySelector('.naturekampret-white');
      natureBlackImg.style.display = 'none'; // Sembunyikan gambar toyiban
      natureWhiteImg.style.display = 'block'; // Tampilkan gambar natureWhiteImg  
    },

    hideNature(event) {
      const element = event.currentTarget; // Ambil elemen yang memicu event
      const natureBlackImg = element.querySelector('.naturekampret');
      const natureWhiteImg = element.querySelector('.naturekampret-white');
      natureBlackImg.style.display = 'block'; // Tampilkan gambar toyiban
      natureWhiteImg.style.display = 'none'; // Sembunyikan gambar natureWhiteImg  
    }
  }

};
</script>

<style scoped>
/* Scoped CSS untuk Featured Services */
/*--------------------------------------------------------------
# Featured Services Section
--------------------------------------------------------------*/


.img-container {
  position: relative;
  display: inline-block;
}

.img-container img {
  height: 50px;
  /* Atur tinggi gambar sesuai kebutuhan */
}

.haqiqi {
  display: none;
  /* Sembunyikan gambar haqiqi pada awalnya */
}

.naturekampret-white {
  display: none;
  /* Sembunyikan gambar haqiqi pada awalnya */
}

.featured-services {
  padding: 40px 0;
}

.featured-services .service-item {
  position: relative;
  padding-top: 20px;
}

.featured-services .service-item .icon {
  background-color: color-mix(in srgb, var(--accent-color), transparent 80%);
  width: 72px;
  height: 72px;
  position: relative;
  /* margin-right: 15px; */
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
}

.featured-services .service-item .icon i {
  color: var(--accent-color);
  font-size: 32px;
  z-index: 2;
  position: relative;
}

.featured-services .service-item .title {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 18px;
}

.featured-services .service-item .title a {
  color: var(--heading-color);
}

.featured-services .service-item .title a:hover {
  color: var(--accent-color);
}

.featured-services .service-item .description {
  font-size: 14px;
}

.featured-services .service-item:hover .icon {
  background-color: var(--accent-color);
}

.featured-services .service-item:hover .icon i {
  color: var(--contrast-color);
}


@media (max-width: 576px) {
  .featured-services {
    padding: 20px 0;
    /* Mengurangi padding */
  }

  .featured-services .service-item {
    padding-top: 10px;
    /* Mengurangi padding atas */
  }

  .featured-services .service-item .icon {
    width: 56px;
    /* Mengurangi lebar ikon */
    height: 56px;
    /* Mengurangi tinggi ikon */
  }

  .featured-services .service-item .icon i {
    font-size: 24px;
    /* Mengurangi ukuran font ikon */
  }

  .featured-services .service-item .title {
    font-weight: 600;
    /* Mengurangi ketebalan font */
    margin-bottom: 3px;
    /* Mengurangi margin bawah */
    font-size: 16px;
    /* Mengurangi ukuran font judul */
  }

  .featured-services .service-item .title a {
    color: var(--heading-color);
  }

  .featured-services .service-item h4 {
    font-size: 12px;
    /* Mengurangi ukuran font deskripsi */
  }
}
</style>