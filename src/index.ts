import { Hono } from 'hono'
import router from './routes'

const app = new Hono()

app.route('/api', router)

export default {
  port: 2026,
  fetch: app.fetch,
}
