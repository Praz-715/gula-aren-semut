<!-- src/components/FeaturedServices.vue -->
<template>
    <section id="featured-services" class="featured-services section light-background">
      <div class="container">
        <div class="row gy-4">
          <div class="col-xl-4 col-lg-6" v-for="(service, index) in services" :key="index">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i :class="service.icon"></i></div>
              <div>
                <h4><a href="#" class="stretched-link">{{ service.title }}</a></h4>
                <p>{{ service.description }}</p>
              </div>
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
          { icon: "bi bi-briefcase", title: "Lorem Ipsum", description: "Voluptatum deleniti atque..." },
          { icon: "bi bi-card-checklist", title: "Dolor Sitema", description: "Minim veniam, quis nostrud..." },
          { icon: "bi bi-bar-chart", title: "Sed ut perspiciatis", description: "Duis aute irure dolor..." },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Scoped CSS untuk Featured Services */
  </style>
  