import { requestId } from 'hono/request-id'

export const requestIdMiddleware = requestId({
  headerName: 'HOLO',
  limitLength: 32,
})
