export type RoomId = string

export interface Room {
  id: RoomId
  name: string
  roomtype: 'public' | 'private'
  password?: string
  status: 'active' | 'closed'
}
