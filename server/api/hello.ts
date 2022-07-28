import { CompatibilityEvent, defineEventHandler, useQuery } from 'h3'

export default defineEventHandler((event: CompatibilityEvent) => {
  const query = useQuery(event)
  console.log('Query on server: ', query)
  return {
    api: query.test
  }
})
