<template>
  <div
    class="p-2 w-full flex items-center rounded-xl bg-[rgba(0,0,0,0.2)] transition-all overflow-x-auto .hidden-scrollbar"
  >
    <Tab
      v-for="(tab, index) in tabs"
      :key="tab.path"
      :title="tab.title"
      :active="activeTab === index"
      @click="handleActiveTab(index)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tab from './Tab.vue'

export default defineComponent({
  name: 'Tabs',
  components: {
    Tab,
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    default: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const activeTab = ref(props.default)
    const handleActiveTab = (index: number) => {
      if (activeTab.value !== index) {
        activeTab.value = index
        emit('change', index)
      }
    }
    return { props, handleActiveTab, activeTab }
  },
})
</script>

<style scoped></style>
