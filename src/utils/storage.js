import { SAVE_PREFIX } from '@/config'

export const get = key => {
  const value = localStorage.getItem(`${SAVE_PREFIX}${key}`)
  if (!value) return null
  return value.startsWith('{') || value.startsWith('[') ? JSON.parse(value) : value
}

export const save = (key,value)=>{
  const data = typeof value === 'object' ? JSON.stringify(value):value
  localStorage.setItem(`${SAVE_PREFIX}${key}`,data)
}

export const remove = key =>{
  localStorage.removeItem(key)
}

export const clear = () => {
  localStorage.clear()
}