import { CompatibilityEvent, defineEventHandler, useQuery } from 'h3'

export default defineEventHandler((event: CompatibilityEvent) => {
  const query = useQuery(event)
  console.log('Request: ', query.test)
  return {
    api: query.test
  }
})
