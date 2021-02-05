<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Conversations
                    </a>

                    <a class="navbar-item">
                        Membres
                    </a>
                </div>

                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong><router-link to="/creer-compte">S'inscrire</router-link></strong>
                        </a>
                        <a class="button is-light">
                            <router-link to="/se-connecter">Se connecter</router-link>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.navbar-end a strong a {
    color: white;
}

.navbar-end a a {
    color: #555;
}
</style>