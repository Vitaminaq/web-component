import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup(prop, ctx) {
    onMounted(() => {
      // ctx.$el?.removeAttribute("defer-hydration");
    })

    return () => {
      // 获取slot组件进行渲染
      return (ctx as any).slots.default?.()?.[0]?.children[0]
    }
  }
})
