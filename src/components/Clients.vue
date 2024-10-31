<!-- src/components/Clients.vue -->
<template>
    <section id="clients" class="clients section">
      <div class="container">
        <div class="row gy-4">
          <div class="col-xl-2 col-md-3 col-6 client-logo" v-for="(client, index) in clients" :key="index">
            <img :src="client.img" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Clients",
    data() {
      return {
        clients: [
          { img: "assets/img/clients/client-1.png" },
          { img: "assets/img/clients/client-2.png" },
          { img: "assets/img/clients/client-3.png" },
          { img: "assets/img/clients/client-4.png" },
          { img: "assets/img/clients/client-5.png" },
          { img: "assets/img/clients/client-6.png" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Scoped CSS untuk Clients */
  </style>
  