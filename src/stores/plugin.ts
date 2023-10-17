import type { PluginModule } from '@/types/Plugin'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePluginStore = defineStore('Plugin', () => {
  const pluginMaps = ref<PluginModule[]>([])

  function registerPluginModule(pluginModule: PluginModule) {
    pluginMaps.value.push(pluginModule)
  }

  return { pluginMaps, registerPluginModule }
})
