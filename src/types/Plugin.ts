import type { RouteRecordRaw } from 'vue-router'

export interface ExtensionPoint {
  // @deprecated
  beforeAppMounted?: Function
  afterAppMounted?: Function
}

export interface PluginModule {
  name: string
  routers: RouteRecordRaw[]
  components?: any[]
  description?: string
  author: string
  bg?: string
  entryPoiniter?: ExtensionPoint
}
