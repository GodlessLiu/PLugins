<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePluginStore } from './stores/plugin'
const pluginStore = usePluginStore()
const { pluginMaps } = storeToRefs(pluginStore)
pluginMaps.value.forEach((plugin) => {
  if (plugin.entryPoiniter?.beforeAppMounted) {
    plugin.entryPoiniter.beforeAppMounted!()
  }
})

onMounted(() => {
  for (const plugin of pluginMaps.value) {
    if (plugin.entryPoiniter?.afterAppMounted) {
      plugin.entryPoiniter.afterAppMounted!()
    }
  }
})
</script>

<template>
  <div class="app px-4 py-1">
    <RouterView />
  </div>
</template>
