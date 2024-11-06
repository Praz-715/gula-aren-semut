<!-- src/components/Services.vue -->
<template>
  <!-- Portfolio Section -->
  <section id="gallery" class="portfolio section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ translations.gallery[locale].title }}</h2>
      <!-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> -->
    </div><!-- End Section Title -->

    <div class="container">

      <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

        <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" class="filter-active">{{ translations.gallery[locale].tabAll }}</li>
          <li data-filter=".filter-padat">{{ translations.gallery[locale].tab1 }}</li>
          <li data-filter=".filter-cair">{{ translations.gallery[locale].tab2 }}</li>
          <li data-filter=".filter-semut">{{ translations.gallery[locale].tab3 }}</li>
        </ul><!-- End Portfolio Filters -->

        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-padat">
            <img src="/assets/img/gallery/padat(1).jpeg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Padat 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="/assets/img/gallery/padat(1).jpeg" title="Padat 1" data-gallery="portfolio-gallery-app"
                class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i
                  class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-cair">
            <img src="/assets/img/gallery/cair(1).jpeg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Cair 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="/assets/img/gallery/cair(1).jpeg" title="Cair 1" data-gallery="portfolio-gallery-product"
                class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i
                  class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-semut">
            <img src="/assets/img/gallery/semut(1).jpeg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Semut 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="/assets/img/gallery/semut(1).jpeg" title="Semut 1" data-gallery="portfolio-gallery-branding"
                class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i
                  class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-padat">
            <img src="/assets/img/gallery/padat(2).jpeg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Padat 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="/assets/img/gallery/padat(2).jpeg" title="Padat 2" data-gallery="portfolio-gallery-app"
                class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i
                  class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-cair">
            <img src="/assets/img/gallery/cair(2).jpeg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Cair 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="/assets/img/gallery/cair(2).jpeg" title="Cair 2" data-gallery="portfolio-gallery-product"
                class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i
                  class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-semut">
            <img src="/assets/img/gallery/semut(2).jpeg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Semut 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="/assets/img/gallery/semut(2).jpeg" title="Semut 2" data-gallery="portfolio-gallery-branding"
                class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i
                  class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-padat">
            <img src="/assets/img/gallery/padat(3).jpeg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Padat 3</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="/assets/img/gallery/padat(3).jpeg" title="Padat 3" data-gallery="portfolio-gallery-app"
                class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i
                  class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-cair">
            <img src="/assets/img/gallery/cair(3).jpeg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Cair 3</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="/assets/img/gallery/cair(3).jpeg" title="Cair 3" data-gallery="portfolio-gallery-product"
                class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i
                  class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-semut">
            <img src="/assets/img/gallery/semut(2).jpeg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Semut 3</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="/assets/img/gallery/semut(2).jpeg" title="Semut 2" data-gallery="portfolio-gallery-branding"
                class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i
                  class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

        </div><!-- End Portfolio Container -->

      </div>

    </div>

  </section><!-- /Portfolio Section -->
</template>

<script>
// import '../assets/vendor/purecounter/purecounter_vanilla.js';
// import '../assets/vendor/imagesloaded/imagesloaded.pkgd.min.js';
import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import { mapState, mapActions } from 'vuex';
import { translations } from '@/translations/translations.js';


// import '../assets/vendor/isotope-layout/isotope.pkgd.min.js';
export default {

  name: 'Services',
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
  mounted() {

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
        filters.addEventListener('click', function () {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });

    });
  }
};
</script>

<style scoped>
/* Tambahkan gaya khusus Anda di sini jika diperlukan */

/*--------------------------------------------------------------
# Portfolio Section
--------------------------------------------------------------*/
.portfolio .portfolio-filters {
  padding: 0;
  margin: 0 auto 20px auto;
  list-style: none;
  text-align: center;
}

.portfolio .portfolio-filters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 20px 10px 20px;
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 5px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  font-family: var(--heading-font);
}

.portfolio .portfolio-filters li:hover,
.portfolio .portfolio-filters li.filter-active {
  color: var(--contrast-color);
  background-color: var(--accent-color);
}

.portfolio .portfolio-filters li:first-child {
  margin-left: 0;
}

.portfolio .portfolio-filters li:last-child {
  margin-right: 0;
}

@media (max-width: 575px) {
  .portfolio .portfolio-filters li {
    font-size: 14px;
    margin: 0 0 10px 0;
  }
}

.portfolio .portfolio-item {
  position: relative;
  overflow: hidden;
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: -100%;
  z-index: 3;
  transition: all ease-in-out 0.5s;
  background: color-mix(in srgb, var(--background-color), transparent 10%);
  padding: 15px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  font-weight: 600;
  padding-right: 50px;
}

.portfolio .portfolio-item .portfolio-info p {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  font-size: 14px;
  margin-bottom: 0;
  padding-right: 50px;
}

.portfolio .portfolio-item .portfolio-info .preview-link,
.portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 50px;
  font-size: 24px;
  top: calc(50% - 14px);
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  transition: 0.3s;
  line-height: 0;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover,
.portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: var(--accent-color);
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 14px;
  font-size: 28px;
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
  bottom: 0;
}
</style>