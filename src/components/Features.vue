<!-- src/components/Features.vue -->
<template>

  <!-- Why Us Section -->
  <section id="why-us" class="section why-us light-background" data-builder="section">

    <div class="container-fluid">

      <div class="row gy-4">

        <div class="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">

          <div class="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
            <h3><span>Macam - macam produk </span><strong>Gula Aren</strong></h3>
            <p>
              3 Jenis Produk unggulan:
            </p>
          </div>

          <div class="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200">

            <div class="faq-item faq-active">

              <h3><span>01</span> Gula Aren Padat</h3>
              <div class="faq-content">
                <p>palm sugar blok is a versatile ingredient, used to sweeten, flavor, and add unique depth to a variety
                  of dishes both sweet and savory. Its rich taste and natural composition make it a staple ingredient in
                  many kitchen dishes</p>
              </div>
              <i class="faq-toggle bi bi-chevron-right"></i>
            </div><!-- End Faq item-->

            <div class="faq-item">
              <h3><span>02</span> Gula Aren Cair</h3>
              <div class="faq-content">
                <p>Palm sugar syrup is a versatile and flavorful ingredient that can be used in a wide variety of drinks
                  and desserts, providing a rich, natural sweet taste</p>
              </div>
              <i class="faq-toggle bi bi-chevron-right"></i>
            </div><!-- End Faq item-->

            <div class="faq-item">
              <h3><span>03</span> Gula Aren Semut</h3>
              <div class="faq-content">
                <p>Palm sugar powder as a natural and flavorful sweetener. Palm sugar powder is suitable for use in
                  various sweet and savory dishes, especially for cakes and toppings, even as a healthier substitute for
                  sugar.</p>
              </div>
              <i class="faq-toggle bi bi-chevron-right"></i>
            </div><!-- End Faq item-->

          </div>

        </div>

        <div class="col-lg-5 order-1 order-lg-2 why-us-img">
          <img src="/assets/img/why-us.jpeg" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100">
        </div>
      </div>

    </div>

  </section><!-- /Why Us Section -->
</template>

<script>
import { Waypoint } from "vue-waypoint";
export default {
  name: 'Features',
  mounted() {
    this.faqItems = document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle');
    
    this.faqItems.forEach((faqItem) => {
      faqItem.addEventListener('click', this.toggleFaq);
    });
  },
  beforeUnmount() {
    // Bersihkan event listener
    this.faqItems.forEach((faqItem) => {
      faqItem.removeEventListener('click', this.toggleFaq);
    });
  },
  methods: {
    toggleFaq(event) {
      const faqContainer = event.currentTarget.closest('.faq-item');
      if (faqContainer) {
        faqContainer.classList.toggle('faq-active');
      }
    }
  }
};
</script>

<style scoped>
/*--------------------------------------------------------------
# Why Us Section
--------------------------------------------------------------*/
.why-us {
  padding: 30px 0;
}

.why-us .content h3 {
  font-weight: 400;
  font-size: 34px;
}

.why-us .content p {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
}

.why-us .faq-container .faq-item {
  background-color: var(--surface-color);
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.why-us .faq-container .faq-item:last-child {
  margin-bottom: 0;
}

.why-us .faq-container .faq-item h3 {
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  margin: 0 30px 0 0;
  transition: 0.3s;
  cursor: pointer;
}

.why-us .faq-container .faq-item h3 span {
  color: var(--accent-color);
  padding-right: 5px;
  font-weight: 600;
}

.why-us .faq-container .faq-item h3:hover {
  color: var(--accent-color);
}

.why-us .faq-container .faq-item .faq-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
}

.why-us .faq-container .faq-item .faq-content p {
  margin-bottom: 0;
  overflow: hidden;
}

.why-us .faq-container .faq-item .faq-icon {
  position: absolute;
  top: 22px;
  left: 20px;
  font-size: 22px;
  line-height: 0;
  transition: 0.3s;
  color: var(--accent-color);
}

.why-us .faq-container .faq-item .faq-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  line-height: 0;
  transition: 0.3s;
  cursor: pointer;
}

.why-us .faq-container .faq-item .faq-toggle:hover {
  color: var(--accent-color);
}

.why-us .faq-container .faq-active h3 {
  color: var(--accent-color);
}

.why-us .faq-container .faq-active .faq-content {
  /* background-color: red; */
  grid-template-rows: 1fr;
  visibility: visible;
  opacity: 1;
  padding-top: 10px;
}

.why-us .faq-container .faq-active .faq-toggle {
  transform: rotate(90deg);
  color: var(--accent-color);
}

.why-us .why-us-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.why-us .why-us-img img {
  max-height: 70%;
}
</style>