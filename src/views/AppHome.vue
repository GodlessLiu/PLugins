<script setup lang="ts">
import { usePluginStore } from '@/stores/plugin'
import type { PluginModule } from '@/types/Plugin'
import { useRouter } from 'vue-router'
const Router = useRouter()
const pluginStore = usePluginStore()

function gotoPlugin(plugin: PluginModule) {
  Router.push(plugin.routers[0].path)
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
    <div
      class="plugin aspect-square shadow-lg rounded-md pb-4"
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
        <p class="text-right">—— {{ plugin.author }}</p>
      </div>
      <p class="text-xs mt-1 line-clamp-3 text-ellipsis block p-1">{{ plugin.description }}</p>
      <button
        @click="gotoPlugin(plugin)"
        class="float-right mr-2 mt-2 py-1 px-1 bg-green-500 hover:bg-gray-500 text-white font-semibold rounded-md shadow-md text-xs focus:outline-none"
      >
        GO
      </button>
    </div>
  </div>
</template>
