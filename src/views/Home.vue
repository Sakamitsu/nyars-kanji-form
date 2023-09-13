<script setup lang="ts">

  import SearchBar from '../components/SearchBar.vue'
  import InputForm from '../components/InputForm.vue'
  import TagInput from '../components/TagInput.vue'
  import TextAreaForm from '../components/TextAreaForm.vue'
  import InputsForm from '../components/InputsForm.vue'
  import ReadingForm from '../components/ReadingForm.vue'
  import WordForm from '../components/WordForm.vue'
  import ComposedMeaningsForm from '../components/ComposedMeaningsForm.vue'

  import kanjiTags from '../models/constants/kanjiTags'
  import readingTags from '../models/constants/readingTags'

  import { IKanji } from '../models/kanji'
  import {ref} from 'vue'
  
  const kanji = ref<IKanji>()
  const showKanjiForm = ref(false)

  const receiveKanji = (receivedKanji: IKanji) => {
    kanji.value = receivedKanji
    showKanjiForm.value = true
  }

</script>

<template>
  <div class="container">
    <SearchBar @receiveKanji="receiveKanji"/>
    <div v-if="showKanjiForm" class="kanji-form">
      <div class="kanji-block">
        <div class="kanji-head-left">
          <div class="kanji-head-left-center">
            <div class="kid">{{ kanji?.kid }}</div>
            <span id="shortMeans"> Краткое значение: </span> 
            <InputForm 
              style="margin-top: 0" 
              inputType="text"
              v-model="kanji!.entry.general.shortMeans"
            />
            <span id="tags"> Теги: </span> 
            <TagInput 
              :tagList="kanjiTags"
              :selectedTagList="kanji!.entry.general.tags"
            /> 
          </div>
        </div>
        <div class="kanji-head-right">
          <div class="kanji-head-right-element">
            <span id="radical"> Ключ: </span>
            <InputForm 
              class="kanji-head-right-element-input" 
              inputType="text"
              v-model="kanji!.entry.general.radical"
            />
          </div>
          <div class="kanji-head-right-element">
            <span id="onpu"> Фонетик: </span>
            <InputForm 
              class="kanji-head-right-element-input" 
              inputType="text"
              v-model="kanji!.entry.general.onpu"
            />
          </div>
          <div class="kanji-head-right-element">
            <span id="strokeCount"> Кол-во черт: </span>
            <InputForm 
              class="kanji-head-right-element-input" 
              inputType="number"
              v-model="kanji!.entry.general.strokeCount"
            />
          </div>
          <div class="kanji-head-right-element">
            <span id="ids"> IDS: </span>
            <InputForm 
              class="kanji-head-right-element-input" 
              inputType="text"
              v-model="kanji!.entry.general.ids"
            />
          </div>
        </div>
      </div>
      <div class="kanji-block">
          <div class="note-left">
            <span id="note">Примечание:</span>
            <TextAreaForm 
              placeholder-text="Например: этимология, значения в составе др. кандзи, как фонетик читается, то же что/древняя форма того-то (а не добавлять значение), путают/заменяют/в шрифтах"
              style="width: 80%"
              v-model="kanji!.entry.general.note"
            />
          </div>
          <div class="forms-right">
            <InputsForm text="Итайдзи (формы иероглифа)" style="margin-top: 0px;"/>
          </div>
      </div>
      <div class="kanji-block-center">
        <span style="font-size: 18px;">Чтения:</span>
        <ReadingForm text="Онъёми" :tagList="readingTags"/>
        <ReadingForm text="Кунъёми" :tagList="readingTags"/>
        <ReadingForm text="Нанори" :tagList="readingTags"/>
        <ReadingForm text="Другое (древние чтения)" :tagList="readingTags"/>
      </div>
      <div class="kanji-block-center">
        <span style="font-size: 18px;">Значения:</span>
        <WordForm text="Самостоятельные значения"/>
        <span>Источник для самостоятельных значений:</span>
        <InputForm inputType="text"/>
        <ComposedMeaningsForm text="Составные значения"/>
        <ComposedMeaningsForm text="Камбун значения"/>
      </div>
    </div>
  </div>

  
    <!-- TODO! Добавить конвертер чтений и валидацию --> 

</template>

<style scoped>
  .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    margin-top: 1rem;
  }

  .kanji-block {
    display: flex;
    width: 100%;
  }
  .kid {
    font-size: 100px;
    line-height: 1;
  }

  .kanji-form {
    height: 100%;
    width: 95%;
    margin-top: 1rem;
  }
  .kanji-head-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .kanji-head-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .kanji-head-right-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .kanji-head-right-element-input {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .kanji-head-left-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .note-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .forms-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .kanji-block-center {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>