import {MenuItem} from 'src/layouts/types'

export const findMenuItemByUrl = (items: MenuItem[], url: string): MenuItem | undefined => {
  for (const item of items) {
    if (item.url === url) {
      return item
    }
    if (item.items) {
      const foundItem = findMenuItemByUrl(item.items, url)
      if (foundItem) {
        return foundItem
      }
    }
  }
  return undefined
}
