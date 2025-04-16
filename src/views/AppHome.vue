<script>
import axios from "axios";
import imgSamudra from '../assets/IMG_9319.jpeg'
/* import { ref } from 'vue' */

export default {
  name: 'AppHome',

  data() {

    return {

      baseUrl: 'http://127.0.0.1:8030',
      projects: '',
      imgSamudra,

    }

  },

  mounted() {
    axios
      .get(`${this.baseUrl}/api/project`)
      .then(response => {
        console.log(response)
        this.projects = response.data.projects
      })

  },
}

</script>

<template>
  
  <div class="p-5 mb-4  my_jumbotron rounded-3"> <!-- bg-light -->
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Samudra Ekanayake</h1>

      <div class="d-flex justify-content-between align-items-start">

        <div class="row">

        <p class="col-md-8 col-sm-1 fs-4">
          Junior Full Stack developer
        </p>

        <h2>Competenze</h2>
        <ul class="list-unstyled"> 
          <li>HTML &nbsp;<i class="fa-brands fa-html5 fs-5" ></i> </li> 
          <li>CSS &nbsp;<i class="fa-brands fa-css3 fs-5"></i></li>
          <li>BOOTSTRAP  &nbsp;<i class="fa-brands fa-bootstrap fs-5"></i></li>
          <li>JAVASCRIPT  &nbsp;<i class="fa-brands fa-js fs-5"></i></li>
          <li>VUE.JS  &nbsp;<i class="fa-brands fa-vuejs fs-5"></i></li>
          <li>NODE.JS  &nbsp;<i class="fa-brands fa-node fs-5"></i></li>
          <li>VITE  &nbsp;<i class="fa-brands fa-vuejs fs-5"></i></li>
          <li>PHP  &nbsp;<i class="fa-brands fa-php fs-5"></i></li>
          <li>LARAVEL  &nbsp;<i class="fa-brands fa-laravel fs-5"></i></li>
          <li>MYSQL  &nbsp;<i class="fa-solid fa-database fs-5"></i></li>
        </ul>


      </div>

        <div>
          <img :src="imgSamudra" alt="" class="rounded-circle my_image">
        </div>

      </div>

      <p>Ciao, benvenuto nel mio sito portfolio! <br>
        Qui potrai vedere tutti i miei progetti fatti fino ad ora.</p>

    </div>
  </div>


</template>

<style scoped>
.my_image {
  width: 16rem;
  margin-right: 8rem;
}
 .my_jumbotron {
  background-color: #7297A7;
 }


</style>
