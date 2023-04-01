import { Ticket } from '../types/types'

export const sortWithPrice = (array: Ticket[]) => {
  let newArray = [...array]
  return newArray.sort((prevItem: any, nextItem: any) => prevItem.price - nextItem.price)
}

export const sortWithFastest = (array: Ticket[]) => {
  let newArray = [...array]
  return newArray.sort((prevItem: any, nextItem: any) => {
    const prevItemDuration = prevItem.segments[0].duration + prevItem.segments[1].duration
    const nextItemDuration = nextItem.segments[0].duration + nextItem.segments[1].duration

    return prevItemDuration - nextItemDuration
  })
}
