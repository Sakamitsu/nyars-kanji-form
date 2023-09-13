<script setup lang="ts">
    import {ref} from 'vue'

    const isExpanded = ref(localStorage.getItem("isExpanded") === "true")
    
    let toggleMenu = () => {
        isExpanded.value = !isExpanded.value;
        localStorage.setItem("isExpanded", String(isExpanded.value));
    }
</script>

<template>
    <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img src="../assets/logo.png" alt="Nyars">
            <div class="logo-name" v-show="isExpanded">
                Новый <pre>японско-русский</pre> словарь <pre>кандзи редактор</pre> 
            </div>
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>
        <h3>Меню</h3>
        <div class="menu">
            <RouterLink to="/" class="button">
                <span class="material-icons">home</span>
                <span class="text">Главная</span>
            </RouterLink>
            <RouterLink to="/user" class="button">
                <span class="material-icons">person</span>
                <span class="text">Аккаунт</span>
            </RouterLink>
            <RouterLink to="/entry" class="button">
                <span class="material-icons">collections_bookmark</span>
                <span class="text">Статьи</span>
            </RouterLink>
            <a href="https://nyars.org/" class="button">
                <span class="material-icons">open_in_browser</span>
                <span class="text">Сайт</span>
            </a> 
        </div>
    </aside>
</template>

<style scoped>
    aside {
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        min-width: calc(2rem + 32px);
        min-height: 100vh;
        overflow: hidden;
        padding: 1rem;
        background-color: #2D2E2F;
        color: var(--light);
        transition: 0.2s ease-out;
        user-select: none;
    }


    .logo {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
    }
    .logo img {
        width: 2rem;
        filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
    }
    .logo-name {
        text-transform: uppercase;
        margin-left: 1rem;
        color: #1a9790;
    }
    .logo-name, pre {
        font-weight: bold;
        line-height: normal;
    }
    .is-expanded {
        width: 300px;
        
        @media (max-width: 768px){
            position: fixed;
            z-index: 100;
        }
    }

    .is-expanded .menu-toggle-wrap {
        top: -3rem;
    }
    .is-expanded .menu-toggle {
        transform: rotate(-180deg)
    }
    .is-expanded .logo img {
        width: 4rem;
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        position: relative;
        top: 0;
        transition: 0.2s ease-out;
    }

    .menu-toggle {
        transition: 0.2s ease-out;
    }
    .menu-toggle:hover .material-icons {
        color: var(--primary);
        transform: translateX(0.5rem);
    }

    .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
    }

    .menu {
        margin: 0 -1rem;
    }

    h3, .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    .is-expanded  h3 {
        opacity: 1;
    }
    .is-expanded .text {
        opacity: 1;
    }
    .is-expanded .button .material-icons {
        margin-right: 1rem; 
    }
    .button {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        transition: 0.2s ease-out;
    }
    .button:hover {
        background-color: var(--dark-alt);
    }
    .button:hover .material-icons, .button:hover .text {
	 color: var(--primary);
    }
    .menu .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
    }
    .text {
        color: var(--light);
        transition: 0.2s ease-out;
    }

    h3 {
        color: #64748b;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        margin-top: -1rem;
        text-transform: uppercase;
    }
    .button.router-link-exact-active {
	    background-color: var(--dark-alt);
	    border-right: 5px solid var(--primary);
    }
    .button.router-link-exact-active .material-icons, .button.router-link-exact-active .text {
	    color: var(--primary);
    }

</style>