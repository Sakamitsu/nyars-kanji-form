<script setup lang="ts">
  
  import { ref, computed, watch } from 'vue'
  import {useI18n} from 'vue-i18n'

  interface IProps {
    tagList: string[]
    selectedTagList?: string[]
  }

  const props = withDefaults(defineProps<IProps>(), {
    selectedTagList: () => [],
  });

  watch(() => props.selectedTagList, (newVal) => {
    selectedTagList.value = newVal
  })

  const selectedTagList = ref<string[]>(props.selectedTagList)
  const showTagList = ref(false)
  const addTagButton = computed<boolean[]>(() => {
    return props.selectedTagList === undefined 
    ? new Array(props.tagList.length).fill(true) 
    : props.tagList.map((tl) => {
      return selectedTagList.value.includes(tl) ? false : true
    })
  })

  const selectTag = (tag: string, index: number) => {
    if (selectedTagList.value.includes(tag)) {
      selectedTagList.value = selectedTagList.value.filter(t => t !== tag)
      addTagButton.value[index] = true
    }
    else {
      selectedTagList.value.push(tag)
      addTagButton.value[index] = false
    }
  };

  //A crutch solution because of dot uses in api and i18n don't support it.
  //See below here: https://github.com/kazupon/vue-i18n/issues/710 
  const fixTag = (tag: string) => {
    return tag.replace('.','-')
  }
  
  const {t} = useI18n()

</script>

<template>
  <div class="tag-input">
    <div class="select-bar" @click="showTagList = !showTagList" :style="{border: showTagList ? '1.5px var(--primary) solid' : ''}">
      <div class="selected">
        <ul class="selected-tag-list">
          <li
            v-for="tag in selectedTagList"
            :key="tag"
          >
          {{ t(`tags.${fixTag(tag)}`) }}
          </li>
        </ul>
      </div>
      <div
        class="caret" 
        :style="{
          transform: showTagList ? 'rotate(180deg)' : '',
          'border-top': showTagList ? '9px solid var(--primary)': ''
        }"
      >
      </div>
    </div>
    <ul v-if="showTagList" class="tag-list">
      <li
        v-for="(tag,index) of props.tagList"
        :key="tag"
        @click="selectTag(tag,index)"
      >
      {{ t(`tags.${fixTag(tag)}`) }}
      <span v-if="addTagButton[index]" class="material-symbols-outlined" style="color:var(--primary)">add_circle</span>
      <span v-else class="material-symbols-outlined" style="color: #c0392b" >delete</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .tag-input {
    min-width: 16rem;
    min-height: 3rem;
    position: relative;
    margin: 0;
  }
  .tag-input * {
    box-sizing: border-box;
  }
  .select-bar {
    background: var(--border);
    color: var(--light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px var(--border) solid;
    border-radius: 0.5em;
    padding: 1em;
    cursor: pointer;
    transition: background 0.3s;
    min-height: 68px;
    z-index: 0;
  }
  .select-bar:hover {
    background-color: #323741;
  }
  .select-bar:focus {
    border-color: var(--primary);
  }
  .caret {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 9px solid var(--light);
    transition: 0.3s;
  }
  .tag-list {
    list-style: none;
    padding: 0.2em 0.5em;
    background: #323741;
    border: 1px #363a43 solid;
    box-shadow: 0 0.5em 1em rgba(0,0,0,0.2);
    border-radius: 0.5em;
    color: #9fa5b5;
    width: 100%;
    height: 13rem;
    overflow: auto;
    opacity: 1;
    display: block;
    transition: 0.2s;
    user-select: none;
    position: absolute;
    z-index: 99;
  }
  .tag-list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #323741;
  }

  .tag-list::-webkit-scrollbar {
    width: 12px;
    background-color: #323741;
  }

  .tag-list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: var(--primary);
  }
  .tag-list li {
    padding: 0.7em 0.5em;
    margin: 0.3em 0;
    border-radius: 0.5em;
    cursor: pointer;
  }
  .tag-list li:hover {
    background: #2a2d35;
  }
  .selected-tag-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 7px;
    margin-right: 15px;
    padding: 0;
    max-width: 100%;
    flex-flow: row wrap;
    overflow: hidden;
    list-style-position: inside;
  }
  .selected-tag-list li {
    background-color: var(--dark-green);
    padding: 5px;
    border-radius: 4px;
    color: white;
    white-space: nowrap;
    transition: 0.1s ease background;
  }
  .material-symbols-outlined {
    font-size: 20px;
    position: absolute;
    right: 0;
    margin-right: 10px;
    margin-top: 2px;
  }
</style>