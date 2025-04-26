<script>

export default {
  name: 'AppAbout',

}

</script>

<template>

  <!--------about------>


  <h1 class="my_title text-center pb-3 mb-5">CHI SONO?</h1>

  <div class="container my_container rounded-3 p-5 ">
    <p>Ciao! mi chiamo Samudra e sono uno sviluppatore web.
      Sono nato a Roma ma attualmente vivo a Milano.
      I miei genitori provengono dallo Sri Lanka e per questa ragione parlo anche la loro lingua nativa oltre
      all'inglese e l'italiano, la mia lingua madre.
      Ho conseguito il diploma con la qualifica di operatore elettrico civile/industriale grazie alla quale ho iniziato
      a lavorare in diverse aziende con varie mansioni come metalmeccanico, chimico ecc...
      Tuttavia, ho sempre avuto una grandissima passione per la tecnologia natami dopo che a 5 anni mio padre mi regalò
      la Playstation, da li in poi è scoccata una scintilla dentro di me che mi ha portato col tempo a informarmi, ad
      interessarmi ed a studiare per conto mio tutto ciò che riguardava la tecnologia ed i suoi componenti come i
      processori, schede grafiche, computer e tanto altro, ho iniziato così a sognare di trovare un lavoro in ambito
      tech.
      Finalmente, l'anno scorso, è arrivata l'occasione per me di iniziare il la mia formazione come Junior Full Stack
      Web Deloper,e ora ho acquisito competenze in HTML, CSS e Bootstrap per quanto riguarda i linguaggi di markup,
      mentre per il front-end ho imparato ad usare Javascript con Vue.js, e, infine, ho appreso PHP, Laravel e MySql per
      la parte back-end.
      Non vedo l'ora di iniziare una nuova avventura in questo settore, acquisire sempre nuove competenze perché amo
      questo mondo e sono voglioso di mettermi in gioco e di imparare sempre di più.</p>
  </div >

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


.my_title {
  padding: 5rem;

}

.my_container {

  background: linear-gradient(to bottom, #7297A7, transparent 500%);
  margin-bottom: 5rem;
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