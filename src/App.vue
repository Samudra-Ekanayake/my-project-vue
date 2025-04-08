<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',

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

  <AppProject></AppProject>

</template>

<style scoped></style>
