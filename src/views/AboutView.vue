<script lang="ts" setup>
import { ref } from 'vue'
import LitWrapper from '@/web-components/LitWrapper.vue'
import '@/web-components/lit-element'

const count = ref(10)

const add = () => {
  count.value++
}
</script>
<template>
  <div class="about">
    <h1 @click="add">This is an about page</h1>
    <LitWrapper>
      <my-element :count="count" text="我是自定义组件" />
    </LitWrapper>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
