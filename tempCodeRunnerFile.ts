function test() {
  const a: string = '123456789'

  const res = (a?.trim() ?? '') || '未命名的房间'
  console.log(res)
  return res
}
