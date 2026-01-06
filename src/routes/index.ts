import { Hono } from 'hono'
import * as roomService from '../services/roomService'

const router = new Hono()

router.post('/room/create', async (c) => {
  const { name, roomtype, password } = await c.req.json()
  const room = roomService.createRoom(name, roomtype, password)
  return c.json(room)
})

router.post('/room/:id/close', (c) => {
  const status = roomService.closeRoom(c.req.param('id'))
  if (!status) return c.json({ error: 'Room not found' }, 404)
  return c.json({ success: true })
})

router.post('/room/:id/open', (c) => {
  const status = roomService.openRoom(c.req.param('id'))
  if (!status) return c.json({ error: 'Room not found' }, 404)
  return c.json({ success: true })
})

router.get('/room/:id', (c) => {
  const roomId = roomService.getRoom(c.req.param('id'))
  if (!roomId) return c.json({ error: 'Room not found' }, 404)
  return c.json(roomId)
})

router.delete('/room/:id', (c) => {
  const status = roomService.deleteRoom(c.req.param('id'))
  if (!status) return c.json({ error: 'Room not found' }, 404)
  return c.json({ success: true })
})

router.get('/room/list', (c) => {
  const roomList = roomService.listRooms()
  return c.json(roomList)
})

export default router
