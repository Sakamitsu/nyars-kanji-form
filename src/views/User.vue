<script setup lang="ts">
    import {ref} from 'vue'
    import { useCookieStore } from '../stores/cookieStore';
    import TextAreaForm from '../components/TextAreaForm.vue';

    const cookieStore = useCookieStore()
    const textareaCookie = ref("");

    const showMessage = ref(false)
    
    const showLain = ref(false)

    function saveMessage() {
        showMessage.value = true;
        setTimeout(() => {showMessage.value = false}, 3000);

        cookieStore.cookie = textareaCookie.value;
        textareaCookie.value = "";

    }

</script>

<template>
    <div class="container">
        <h1>Введите свой cookie:</h1>
        <TextAreaForm 
            placeholderText="В Chrome: F12 → Network → Ctrl+R → nyars.org (самый первый) → cookie"
            v-model="textareaCookie"
        >
        </TextAreaForm>
        
        <button class="button-save" @click="saveMessage">
            Сохранить
        </button>
        
        <h4 v-show="showMessage">Куки сохранены!</h4>
    </div>
    
    <div class="bruh">
        <img v-if="showLain" src="https://stickerswiki.ams3.cdn.digitaloceanspaces.com/lainmood/sticker_0.webp" alt="lain-bruh">
        <button @click="showLain = !showLain">🍪</button>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-items: center;
        position: initial;
    }

    .bruh {
        position:absolute;
        bottom:0;
        right:0;
    }
    
    img {
        height: 200px;
        width: 200px;
        margin-right: 2rem;
    }
    .button-save {
        appearance: none;
        background-color: var(--dark-green);
        border: 1px solid rgba(27, 31, 35, .15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: 'Segoe UI', sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 6px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;
        margin-top: 1rem;
    }

    .button-save:focus:not(:focus-visible):not(.focus-visible) {
        box-shadow: none;
        outline: none;
    }

    .button-save:hover {
        background-color: #2c974b;
    }

    .button-save:focus {
        box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
        outline: none;
    }

    .button-save:disabled {
        background-color: #94d3a2;
        border-color: rgba(27, 31, 35, .1);
        color: rgba(255, 255, 255, .8);
        cursor: default;
    }

    .button-save:active {
        background-color: #298e46;
        box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
    }
    h1 {
        margin-bottom: 0.5rem;
    }
    
    h4 {
        margin-top: 1rem;
        color: var(--dark-green);
    }

</style>