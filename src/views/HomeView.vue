<template>
  <div class="home">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.36 38.04">
      <path class="a" d="M44.91,10.82a3.81,3.81,0,0,1,3.94,3.94A3.79,3.79,0,0,1,45,18.1"/>
      <path class="b" d="M45,16.28a1.89,1.89,0,0,0,1.93-1.67,1.9,1.9,0,0,0-2-2Z"/>
      <path class="a" d="M4.44,18a3.73,3.73,0,0,1-3.93-3.8A3.73,3.73,0,0,1,4.36,11"/>
      <path class="b" d="M4.44,16.28a1.91,1.91,0,0,1-2-2A1.9,1.9,0,0,1,4.4,12.64Z"/>
      <path class="a" d="M4.12,7.35V33a40,40,0,0,0,4.3,1.85c14.31,5.25,28.57,1.8,36.82-1.09V7.35"/>
      <ellipse class="a" cx="24.68" cy="7.45" rx="20.56" ry="5.85"/>
      <path class="c" d="M19,6.64A5.9,5.9,0,0,1,25.14.52a5.88,5.88,0,0,1,5.2,6"/>
      <path class="a" d="M21,6.64A3.8,3.8,0,0,1,25,2.7a3.8,3.8,0,0,1,3.35,3.86"/>
    </svg>
    <h1>Wat eten we vandaag?</h1>
    <section>
      <h2>Info</h2>
      <p>
        Dit is een Single Page Application gemaakt met het Vue JavaScript framework.
      </p>
      <p>
        Soms is het moeilijk om te beslissen wat je vandaag wilt eten, het doel van deze app is om deze keuze
        makkelijker te maken door het tonen van een lijst van gerechten.
      </p>
      <p>
        Je kan deze lijst van gerechten zelf samenstellen, door je eigen gerechten toe te voegen en bestaande gerechten te
        verwijderen naar eigen wil.
      </p>
      <p>
        Dan is er nog de mogelijkheid om je favoriete gerechten aan te duiden, en deze dan apart te kunnen bekijken
      </p>

      <nav>
        <a href="https://natanvb.sinners.be/" target="_blank">Mijn portfolio</a>
        <a href="https://github.com/NatanVBraeckel/PDP_project" target="_blank">Github code</a>
      </nav>

    </section>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 10px;
}

section {
  padding: 15px;
  border-top: 2px dotted #000;
  border-bottom: 2px dotted #000;
  background-color: #fdfdfd;
  max-width: 800px;
  margin: 0 auto;
  p {
    line-height: 1.5em;
    margin-bottom: 10px;
    font-size: 1.15em;
  }

  nav {
    padding: 30px;
    display: flex;
    justify-content: space-around;
    a {
      &:hover {
        color: #FF6900;
      }
    }
  }
}



svg {
  max-width: 300px;
}

.a {
  fill: #c8c8c8;
}

.a,
.b,
.c {
  stroke: #231f20;
  stroke-miterlimit: 10;
}

.b {
  fill: #fff;
}

.c {
  fill: #b4b4b4;
}
</style>
