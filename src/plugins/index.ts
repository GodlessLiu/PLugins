import axios from 'axios'
export async function QueryPlugins(url: string) {
  const { data } = await axios.get(url)
  return data
}
