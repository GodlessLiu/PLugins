import type { PluginModule } from '@/types/Plugin'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePluginStore = defineStore('Plugin', () => {
  const pluginMaps = ref<PluginModule[]>([])

  function registerPluginModule(pluginModule: PluginModule, isOpen: boolean) {
    pluginMaps.value.push({ ...pluginModule, open: isOpen })
  }

  return { pluginMaps, registerPluginModule }
})
