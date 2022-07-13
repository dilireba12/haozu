import request from '@/utils/request'

/**
 *
 * @returns 获取城市列表数据
 */
export const getCityList = () => {
  return request({
    url: '/area/city',
    params: {
      level: 1
    }
  })
}

/**
 *
 * @returns 获取热门城市数据
 */

export const getHotCity = () => {
  return request({
    url: '/area/hot'
  })
}
/**
 *
 * @param {查询房源数据} id
 * @returns
 */
export const getCityData = (id) => {
  return request({
    url: '/area/map',
    params: {
      id
    }
  })
}
