export type Segments = [
  {
    origin: string

    destination: string

    date: string

    stops: string[]

    duration: number
  },
  {
    origin: string

    destination: string

    date: string

    stops: string[]

    duration: number
  }
]
export interface Ticket {
  map(arg0: (item: any) => void): unknown
  price: number

  carrier: string

  segments: Segments
}

export interface State {
  searchId: {
    searchId: string
    error: boolean
  }
  sideBarFilter: {
    all: boolean
    nonStop: boolean
    oneTransfer: boolean
    twoTransfers: boolean
    threeTransfers: boolean
  }
  tabBarFilter: {
    currentTab: string
  }
  ticket: {
    ticketData: Ticket[]
    stop: boolean
    error: boolean
    loading: boolean
    status: string
  }
}

export interface SortSideFilter {
  all: boolean

  nonStop: boolean

  oneTransfer: boolean

  threeTransfers: boolean

  twoTransfers: boolean
}
