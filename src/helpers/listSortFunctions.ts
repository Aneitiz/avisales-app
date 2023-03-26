import { SortSideFilter, Ticket } from '../types/types'

import { sortWithFastest, sortWithPrice } from './sortFunctions'

export const sortCurrentTab = (currentTab: any, tickets: Ticket[]) => {
  if (currentTab.currentTab === 'cheapest') {
    return sortWithPrice(tickets)
  }
  if (currentTab.currentTab === 'fastest') {
    return sortWithFastest(tickets)
  }
  if (currentTab.currentTab === 'optimal') {
    return sortWithFastest(tickets)
  }
}

export const sortSideFilters = (filter: SortSideFilter, tickets: Ticket[] | undefined, status: string) => {
  const filters = {
    all: filter.all && 4,
    nonStop: filter.nonStop && 0,
    oneTransfer: filter.oneTransfer && 1,
    twoTransfers: filter.twoTransfers && 2,
    threeTransfers: filter.threeTransfers && 3,
  }
  let ticketsToRender: any = []
  if (status === 'fulfilled') {
    // @ts-ignore
    tickets.map((item: any) => {
      if (filter.all) {
        ticketsToRender.push(item)
        return
      }

      const stopsTo = item.segments[0].stops.length
      const stopsBack = item.segments[1].stops.length
      if (
        (stopsTo === filters.all ||
          stopsTo === filters.nonStop ||
          stopsTo === filters.twoTransfers ||
          stopsTo === filters.threeTransfers) &&
        (stopsBack === filters.nonStop ||
          stopsBack === filters.oneTransfer ||
          stopsBack === filters.twoTransfers ||
          stopsBack === filters.threeTransfers)
      ) {
        ticketsToRender.push(item)
        return
      }
    })
  }

  return ticketsToRender
}
