import * as util from '@/utils/util'

describe('utils/util', () => {
  
  it('isPhoneNumber', () => {
    expect(util.isPhoneNumber('111')).toBe(false)
    expect(util.isPhoneNumber('13826061549')).toBe(true)
    expect(util.isPhoneNumber('12344564345')).toBe(false)
  })
  
  it('isIdCard', () => {
    expect(util.isIdCard('440883198102270339')).toBeTruthy()
    expect(util.isIdCard('440883098102270339')).toBeFalsy()
  })
  
  it('isEmail', () => {
    expect(util.isEmail('chenhuachun@xdh.net.cn')).toBeTruthy()
  })
  
  it('isUrl', () => {
    expect(util.isUrl('https://www.baidu.com/path')).toBeTruthy()
    expect(util.isUrl('http://127.0.0.1/')).toBeTruthy()
  })
  
  
  
})

