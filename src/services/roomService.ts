import { Room } from '../types/room'
import { nanoid } from 'nanoid'
import db from '../../db/db'

export function createRoom(
  name: string,
  roomtype: Room['roomtype'],
  password?: string
) {
  const roomId = nanoid(16)
  const room: Room = {
    id: roomId,
    name: name?.trim() || '未命名的房间', //"space" "undefined" "null"
    roomtype,
    password,
    status: 'active',
  }
  db.run(
    'INSERT INTO rooms (id, name, roomtype, password, status) VALUES (?, ?, ?, ?, ?)',
    [room.id, room.name, room.roomtype, room.password ?? null, room.status]
  )
  return room
}

export function closeRoom(id: string) {
  const room = db.query('SELECT * FROM rooms WHERE id = ?').get(id)
  if (!room) return false
  const updateRoom = db.run('UPDATE rooms SET status = ? WHERE id = ?', [
    'closed',
    id,
  ])
  return updateRoom
}

export function openRoom(id: string) {
  const room = db.query('SELECT * FROM rooms WHERE id = ?').get(id)
  if (!room) return false
  const updateRoom = db.run('UPDATE rooms SET status = ? WHERE id = ?', [
    'active',
    id,
  ])
  return updateRoom
}

export function getRoom(id: string) {
  const room = db.query('SELECT * FROM rooms WHERE id = ?').get(id)
  if (!room) return false
  return room
}

export function deleteRoom(id: string) {
  const room = db.query('SELECT * FROM rooms WHERE id = ?').get(id)
  if (!room) return false
  db.run('DELETE FROM rooms WHERE id = ?', [id])
  return true
}

export function listRooms() {
  return db.query('SELECT * FROM rooms').all()
}
