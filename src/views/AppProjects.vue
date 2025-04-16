<script>
import axios from "axios";
/* import { ref } from 'vue' */

export default {
  name: 'AppProjects',

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
  <div class="text-center my_title">
    <h1>I miei progetti</h1>
  </div>

  <div class="container">
    <div class="row px-5">
      <div class="col gy-5" v-for="project in projects.data">
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
            <RouterLink :to="{name: 'project', params: {id: project.id}}" class="btn btn-dark">Dettagli</RouterLink>
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
.my_title {
  padding-top: 5rem;
}

.my_card {
  background-color: #7B9AAC;
}
</style>
