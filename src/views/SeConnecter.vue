<template>
    <div>

        <Header/>

        <div id="form">
            <h1 class="title is-1">Se connecter</h1>

            <form @submit.prevent="seConnecter">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input v-model="email" required class="input" type="email" placeholder="Email">
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <p class="control has-icons-left">
                        <input v-model="password" required class="input" type="password" placeholder="Mot de passe">
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <input type="submit" class="button is-primary" value="Se connecter">
            </form>    
        </div>

    </div>
</template>

<script>
import Header from '@/components/Header.vue'

    export default {
        components: {
            Header
        },

        data() {
            return {
                email: 'test@test.fr',
                password: 'test'
            }
        },
        methods : {
            seConnecter() {
                api.post('members/signin', {
                    email:this.email,
                    password:this.password
                }).then(response => {
                    this.$store.commit('setMembre', response.data.member);
                    this.$store.commit('setToken', response.data.token);

                    this.$router.push('/');
                }).catch(error => {
                    alert(error.response.data.message);
                });
            }                
        }
    }
</script>

<style>
#form {
    width: 25%;
    margin: auto;
    padding-top: 5em;
}

h1 {
    text-align: center;
    font-size: 2.5em;
    padding-bottom: 0.5em;
}

input {
    width: 100%;
}
</style>