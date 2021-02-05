<template>
  <div id="app" v-if="apiOk">
    <router-view/>
  </div>

  <div v-else>
    Impossible de joindre l'API
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiOk:false
    }
  },

  mounted() {
    console.log("L'app est démarrée.");

    api.get('ping').then(response => {
      this.apiOk=true;
      console.log("L'api est fonctionnelle.");
      if(!this.$store.state.membre) {
        this.$router.push('/se-connecter');
      }
    }).catch(error => {
      console.log("L'api ne marche pas");
    })
  }
}
</script>

<style lang="scss">
</style>
