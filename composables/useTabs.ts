import { computed, ref } from '@nuxtjs/composition-api'
import { SeriesType } from '~/constants'

interface Tabs {
  title: string
  path: SeriesType
}
export default function useTabs(tabsList: Tabs[]) {
  const tabs = ref(tabsList)
  const pathActive = ref(tabsList[0].path)

  const updatePath = (index: number) => {
    pathActive.value = tabs.value[index].path
  }

  return {
    tabs: computed(() => tabs.value),
    pathActive: computed(() => pathActive.value),
    updatePath,
  }
}
