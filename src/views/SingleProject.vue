<script>

import axios from "axios";




export default {
    name: 'SingleProject',

    data() {

        return {

            baseUrl: 'http://127.0.0.1:8030',
            project: null,

        }

    },

    mounted() {
        axios
            .get(`${this.baseUrl}/api/project/${this.$route.params.id}`)
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    this.project = response.data.project
                } else {

                }
            })

    },

}

</script>

<template>




    <div class="container" v-if="project">
        <div class="row px-5">
            <h1 class="text-center my_title m-0">{{ project.name }}</h1>
            <div class="col gy-3 d-flex justify-content-center">
                <div class="" style="width: 58rem;">
                    <div class="border">
                        <template v-if="!project.cover_image.startsWith('http')">
                            <img :src="baseUrl + '/storage/' + project.cover_image" class="card-img-top" alt="...">
                        </template>
                        <template v-else>
                            <img :src="project.cover_image" class="card-img-top" alt="...">
                        </template>
                    </div>
                    <div class="card-body my_card mt-4">
                        <p class="card-text">{{ project.description }}</p>
                        <p class="my_font">Data di creazione:{{ project.creation_date }}</p>
                        <RouterLink to="/projects" class="btn btn-dark">progetti</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.my_title {
    padding-top: 5rem;
}

.my_font {
    font-size: 12px;;
}
</style>