<template>
    <div>

        <Header/>

        <div id="form">
            <h1 class="title is-1">S'inscrire</h1>

            <form @submit.prevent="creerCompte">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input v-model="fullname" required class="input" type="text" placeholder="Nom">
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                    </p>
                </div>

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

                <input type="submit" class="button is-primary" value="S'inscrire">
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
                fullname: 'test',
                email: 'test@test.fr',
                password: 'test'
            }
        },
        methods : {
            creerCompte() {
                api.post('members', {
                    fullname:this.fullname,
                    email:this.email,
                    password:this.password
                }).then(response => {
                    console.log(response.data);
                    this.$router.push('/se-connecter');
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