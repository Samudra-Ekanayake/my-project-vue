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
      .get(`${this.baseUrl}/api/project/latest`)
      .then(response => {
        console.log(response)
        this.projects = response.data.projects
      })

  },
}

</script>

<template>

  <div class="p-5   my_jumbotron rounded-3"> <!-- bg-light -->
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Samudra Ekanayake</h1>

      <div class="container">

        <div class="row">

          <p class="fs-4">
            Junior Full Stack developer
          </p>
          <div class="col-3">
            <h2>Competenze</h2>
            <ul class="list-unstyled">
              <li>HTML &nbsp;<i class="fa-brands fa-html5 fs-5"></i> </li>
              <li>CSS &nbsp;<i class="fa-brands fa-css3 fs-5"></i></li>
              <li>BOOTSTRAP &nbsp;<i class="fa-brands fa-bootstrap fs-5"></i></li>
              <li>JAVASCRIPT &nbsp;<i class="fa-brands fa-js fs-5"></i></li>
              <li>VUE.JS &nbsp;<i class="fa-brands fa-vuejs fs-5"></i></li>
              <li>NODE.JS &nbsp;<i class="fa-brands fa-node fs-5"></i></li>
              <li>VITE &nbsp;<i class="fa-brands fa-vuejs fs-5"></i></li>
              <li>PHP &nbsp;<i class="fa-brands fa-php fs-5"></i></li>
              <li>LARAVEL &nbsp;<i class="fa-brands fa-laravel fs-5"></i></li>
              <li>MYSQL &nbsp;<i class="fa-solid fa-database fs-5"></i></li>
            </ul>
          </div>


          
          <div class="col-6">
            <h2 class="mb-3">Formazione</h2>

            <ul class="list-unstyled">
              <li><h4>Master Full Stack Web Developer</h4></li>
              <li>Boolean (Febbraio 2024 - Settembre 2024)</li>
            </ul>

            <ul class="list-unstyled">
              <li><h4>Operatore Elettrico Civile/Industriale</h4></li>
              <li>Qualifica triennale presso
                Enfapi como, Erba (2014)</li>
            </ul>

          </div>
          
          
          <div class="col-3">
            <img :src="imgSamudra" alt="" class="rounded-circle my_image">
          </div>
          
        </div>
      </div>

      <p>Ciao! Benvenuto sul mio sito portfolio! <br>
        Qui potrai vedere tutti i miei progetti sviluppati fino ad ora.</p>

    </div>
  </div>

  <!--------progetti in evidenza------>

  <div class="container-fluid p-0 pb-5">

    <h1 class="text-center display-5 fw-bold">In evidenza</h1>

    <div class="container">
      <div class="row px-5">
        <div class="col gy-5 d-flex justify-content-center" v-for="project in projects">
          <div class="card" style="width: 20rem;">
            <div class="border">
              <template v-if="!project.cover_image.startsWith('http')">
                <img :src="baseUrl + '/storage/' + project.cover_image" class="card-img-top" alt="...">
              </template>
              <template v-else>
                <img :src="project.cover_image" class="card-img-top" alt="...">
              </template>
            </div>

            <div class="card-body my_card">
              <h5 class="card-title">{{ project.name }}</h5>
              <RouterLink :to="{ name: 'project', params: { id: project.id } }" class="btn btn-dark">Dettagli
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--------esperinze------>

  <div class="container-fluid mt-3">
    <div class="container">
      <h1 class="text-center display-5 fw-bold mb-4">Esperienze Lavorative</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Junior Full Stack Web Developer Trainee, Boolean
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">corso intensivo di 700 ore con lezione di teoria al mattino e
              pratica nel pomeriggio, durante il corso ho imparato ad utilizzare i principali linguaggi di
              programmazione
              per creare siti ed applicazioni completi in back end e front end, inoltre ho ricreato alcuni layout famosi
              come Whatsapp, Discord, Dropbox ecc... <br>
              <small class="d-block mt-3">Febbraio 2024 - Settembre 2024</small>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Operatore Chimico, Henkel
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Addetto all’uso degli impianti Sonderhoff per
              produzione di guarnizioni in poliuretano espanso, preparazione e set up degli impianti e risoluzione di
              problemi tecnici. <br>
              <small class="d-block mt-3">Maggio 2017 - Marzo 2024 (Via della Foppa, 20, 23848 Oggiono
                LC)</small>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Autista, servizio trasporti, Comune di Costa Masnaga
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Accompagnavo i ragazzi da scuola a casa tramite un autoveicolo.
              <small class="d-block mt-3">Settembre 2016 - Maggio 2017 (Via XXV Aprile 70, 23845 Costa Masnaga)</small>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              Metalmeccanico, ABB
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Montavo ed assemblavo telai per cabine elettriche e mi occupavo anche degli
              imballaggi.
              <small class="d-block mt-3">Maggio 2015 - Novembre 2015 (Via Italia 58, 23846 Garbagnate
                Monastero)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!--------Footer------>


  <div class="container-fluid mt-5 my_footer">
    <div class="container">
      <div class="row">
        <div class="col-6">

          <h5>Contatti</h5>
          <ul class="list-unstyled">
            <li><i class="fa-brands fa-whatsapp"> </i> &nbsp; +39 389 9122017</li>
            <li><a href="#" class="text-decoration-none my_link"><i class="fa-regular fa-envelope"></i> &nbsp;
                samudra2724@gmail.com</a></li>

            <li><i class="fa-solid fa-location-dot"></i> &nbsp; Sesto San Giovanni (MI)</li>

          </ul>
        </div>
        <div class="col-6">
          <h5>Profili Social</h5>
          <ul class="list-unstyled">
            <li><a class="text-decoration-none my_link" href="linkedin.com/in/samudra-ekanayake-542b5331a"><i
                  class="fa-brands fa-linkedin"></i> &nbsp; Linkedin</a></li>
            <li><a href="https://github.com/Samudra-Ekanayake"></a><i class="fa-brands fa-github"></i> &nbsp;Git Hub
            </li>
            <li><i class="fa-brands fa-instagram"></i> &nbsp; samudra27.s</li>
            <li></li>
          </ul>

        </div>

      </div>
    </div>
  </div>


</template>

<style scoped>
.my_image {
  width: 16rem;
  position: relative;
  bottom: 2rem;
}

.my_jumbotron {

  background: linear-gradient(to bottom, #7297A7, transparent 90%);
}

.my_footer {
  /*  background: linear-gradient(to top, black, transparent 90%); */
  background-color: black;
  color: white;
  height: 15rem;
  padding: 4rem;

}

.my_link {
  color: white;
}
</style>
