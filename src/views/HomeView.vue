<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useHead } from '@/lib/@pixso/vue-head'
import '@/web-components/lit-element'
import LitWrapper from '@/web-components/LitWrapper.vue'
import '@/web-components/lit-button'
import HelloWorld from '@/components/HelloWorld.vue'

let timer: any

const head = useHead({
  title: '哈哈哈哈'
})

timer = setTimeout(() => {
  console.log('我执行了', '88888888')
  head.title = '哈哈哈哈'
}, 3000)

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <main>
    <LitWrapper>
      <my-element>我是跨框架组件</my-element>
    </LitWrapper>
  </main>
</template>
