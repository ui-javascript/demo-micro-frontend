import Mock from 'mockjs'
const randomNum = function(x, y) {
  let a = Math.floor((y - x) * Math.random())
  return x + a
}

export function getAsyncImageMock(query) {
  const Random = Mock.Random
  const size = `${randomNum(300, 500)}x${randomNum(300, 500)}`
  return Mock.mock({
    code: 0,
    msg: '',
    data: {
      url: Random.dataImage(`${size}`, `id:${query.id},size:${size}`)
    } 
  }) 
}