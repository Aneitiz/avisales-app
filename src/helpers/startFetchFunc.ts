export const startId = async () => {
  try {
    const request = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!request.ok) {
      throw new Error('Id start error')
    }
    const res = await request.json()
    return res.searchId
  } catch (e: any) {
    throw new Error('Id start error')
  }
}

export const startTicketsFetch = async (searchId: string) => {
  try {
    const request = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    if (!request.ok) {
      throw new Error('could not fetch tickets')
    }
    const res = await request.json()
    return res.tickets
  } catch (e: any) {
    throw new Error(e.message)
  }
}
