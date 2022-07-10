import request from '@/utils/request'

/**
 *
 * @param {获取租房小组信息} area
 * @returns
 */
// eslint-disable-next-line camelcase
export const getRentGroupList = () => {
  return request({
    url: '/home/groups',
    params: {
      area: 'AREA | 88cff55c- aaa4 - e2e0'
    }
  })
}
