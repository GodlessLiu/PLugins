<script setup lang="ts">
import { usePluginStore } from '@/stores/plugin'

const pluginStore = usePluginStore()
</script>

<template>
  <div class="grid grid-cols-2 gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
    <div
      class="plugin aspect-square shadow-lg rounded-md"
      v-for="plugin in pluginStore.pluginMaps"
      :key="plugin.name"
    >
      <div class="h-2/3">
        <img :src="plugin.bg" alt="" class="bg-cover" />
      </div>
      <div class="text-center text-xs px-1">
        <p>
          {{ plugin.name }}
        </p>
        <p class="text-right">---- {{ plugin.author }}</p>
      </div>
      <p class="text-xs mt-1 line-clamp-3 text-ellipsis block p-1">{{ plugin.description }}</p>
    </div>
  </div>
</template>
