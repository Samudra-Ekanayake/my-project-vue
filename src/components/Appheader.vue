<script>

export default {
name: 'AppHeader',

}

</script>

<template>
    
    <nav class="nav d-flex justify-content-around bg-dark position-fixed w-100 z-1">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/projects">Progetti</RouterLink>
        <RouterLink class="nav-link" to="/about">Su di me</RouterLink>
        <RouterLink class="nav-link" to="/contact">Contattami</RouterLink>
    </nav>



</template>

<style>
.nav{
    height: 3rem;
}

.nav-link{
    color: white;
}

.nav-link:hover{

    color: aqua;
}




</style>