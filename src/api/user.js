import request from '@/utils/request'

export const login = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}
/**
 * 获取用户个人资料
 * @returns
*/
export const getUserInfo = () => {
  return request({
    url: 'user'
  })
}
