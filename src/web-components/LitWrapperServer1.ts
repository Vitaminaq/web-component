import { defineComponent, ref } from 'vue'
import '@lit-labs/ssr/lib/render-lit-html.js'
import { renderToString } from '@vue/server-renderer'
import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js'
import { isCustomElementTag, getCustomElementConstructor } from './utils'

export default defineComponent({
  setup(props, ctx) {
    const defaultSlot: any = ctx.slots.default?.()?.[0]?.children
    if (!defaultSlot) return

    const litElementVnode = defaultSlot?.[0]
    if (!litElementVnode) return

    const litElementTagName = litElementVnode?.type

    const litRenderer: LitElementRenderer | null = null
    const litSsrHtml = ref('')

    const resolveSlots = () => {
      let children = litElementVnode.children || []
      if (!Array.isArray(children)) {
        children = [children]
      }

      const childToHtmlPromises = children.map((child: any) => {
        if (child.__v_isVNode) {
          return renderToString(child)
        }

        return Promise.resolve(child)
      })

      return Promise.all(childToHtmlPromises)
    }

    const attachPropsToRenderer = () => {
      const customElementConstructor: any = getCustomElementConstructor(litElementTagName)
      const props = litElementVnode.props

      if (!props) return

      for (const [key, value] of Object.entries(props)) {
        if (
          customElementConstructor !== null &&
          typeof customElementConstructor !== 'string' &&
          key in customElementConstructor.prototype
        ) {
          const isBooleanProp =
            customElementConstructor.elementProperties.get(key)?.type === Boolean

          if (isBooleanProp && value === '') {
            litRenderer?.setProperty(key, true)
          } else {
            litRenderer?.setProperty(key, value)
          }
        } else {
          litRenderer?.setAttribute(key, value as any)
        }
      }
    }
  }
})
