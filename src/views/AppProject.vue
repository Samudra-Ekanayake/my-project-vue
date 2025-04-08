<script setup>
import axios from "axios";
import { ref } from 'vue'

export default {
  name: 'AppHome',

  data() {

    return {

      baseUrl: 'http://127.0.0.1:8030',
      projects: '',

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

<h1>I miei progetti</h1>

<div class="container">
  <div class="row">
    <div class="col g-5" v-for="project in projects.data">
      <div class="card p-3" style="width: 20rem;">

        <template v-if="!project.cover_image.startsWith('http')">
          <img :src="baseUrl + '/storage/' + project.cover_image" class="card-img-top" alt="...">
        </template>
        <template v-else>
          <img :src="project.cover_image" class="card-img-top" alt="...">
        </template>

        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <a href="#" class="btn btn-primary">Dettagli</a>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination    ">
        <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

  </div>
</div>

</template>

<style scoped>

</style>
