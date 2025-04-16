<script>

export default {
    name: 'AppContact',

}

</script>

<template>

    <h1 class="text-center my_title">Contattami</h1>

    <form class="container">
        <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" aria-describedby="namelHelp">
            <div id="name" class="form-text">Inserisci il tuo nome.</div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Inserisci la tua email.</div>
        </div>

       <div class="mb-3">
        <label for="message" class="form-label">Messaggio</label>
        <textarea class="form-control" name="message" id="message" rows="3"></textarea>
       </div>
       

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>



</template>

<style>
.my_title {
    padding-top: 5rem;
}
</style>