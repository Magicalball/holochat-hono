import { Hono } from 'hono'
import { cors } from 'hono/cors'
import router from './routes'

const app = new Hono()

app.use(
  '/api/*',
  cors({
    origin: 'http://localhost:3000/',
    credentials: true,
  })
)
app.route('/api', router)

export default {
  port: 2026,
  fetch: app.fetch,
}
