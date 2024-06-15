<script lang="ts" setup>
import { computed } from 'vue'

const emit = defineEmits<{
  (event: 'click', value: number): void
}>()

type AlignType = 'left' | 'center' | 'right'
interface Prop {
  color?: string
  fontSize?: string
  align?: AlignType
}

const props = withDefaults(defineProps<Prop>(), {
  color: 'black',
  fontSize: '16px',
  align: 'left'
})


const styles = computed<Record<string, string>>(() => {
    return {
      color: props.color,
      fontSize: props.fontSize,
      textAlign: props.align
    }
})

const handleClick = () => {
emit('click', 1 )
}
</script>

<template>
  <div :style="styles" @click="handleClick">
    <slot></slot>
  </div>
</template>
