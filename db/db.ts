import {Database} from 'bun:sqlite'

const db = new Database('holochat.db')

// 初始化房间表
db.run(`
CREATE TABLE IF NOT EXISTS rooms (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  roomtype TEXT NOT NULL,
  password TEXT,
  status TEXT NOT NULL
)
`)

export default db