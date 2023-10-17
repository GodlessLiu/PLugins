import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MainApp from './App.vue'
import router from './router'
import '@/styles/tailwind.css'
import { usePluginStore } from '@/stores/plugin'
import type { PluginModule } from './types/Plugin'
import { useScriptTag } from '@vueuse/core'
const app = createApp(MainApp)

interface PluginEntry {
  name: string
  entry: string
  open: boolean
}

const fakePlugin: PluginEntry[] = [
  // TODO: add online plugin
  {
    name: 'PluginPlayer',
    entry: 'https://aifengliu.top/upload/aplayer.js',
    open: true
  }
]

function addPluginRouter(plugin: PluginModule) {
  if (!plugin.routers || plugin.routers.length === 0) return
  for (const pluginRouter of plugin.routers) {
    router.addRoute(pluginRouter)
  }
}
async function registerPlugins() {
  // TODO: register plugins
  const pluginStore = usePluginStore()
  for (const plugin of fakePlugin) {
    if (!plugin.open) continue
    const { load } = useScriptTag(plugin.entry)
    await load()
    // @ts-ignore
    const PluginModule = window[plugin.name]
    if (PluginModule) {
      pluginStore.registerPluginModule(PluginModule)
      await addPluginRouter(PluginModule)
    }
  }
}

async function initApp() {
  try {
    await app.use(createPinia())
    app.use(router)
    await registerPlugins()
  } catch (e) {
    console.error(e)
  } finally {
    app.mount('#app')
  }
}

initApp()
