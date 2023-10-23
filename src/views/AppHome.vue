<script setup lang="ts">
import { usePluginStore } from '@/stores/plugin'

const pluginStore = usePluginStore()

function reload() {
  window.location.reload()
}
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
          <a href="/ink-mde"> go </a>
          {{ plugin.name }}
        </p>
        <p class="text-right">—— {{ plugin.author }}</p>
      </div>
      <p class="text-xs mt-1 line-clamp-3 text-ellipsis block p-1">{{ plugin.description }}</p>
      <button
        @click="reload"
        :class="[plugin.open ? 'bg-green-500 hover:bg-gray-500' : 'bg-gray-500 hover:bg-green-500']"
        class="float-right mr-2 mt-2 py-1 px-1 text-white font-semibold rounded-lg shadow-md text-xs focus:outline-none"
      >
        {{ plugin.open ? '关闭' : '启动' }}
      </button>
    </div>
  </div>
</template>
