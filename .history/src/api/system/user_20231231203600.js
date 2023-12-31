import systemrequest from '@/utils/systemRequest'

export const getUserList = () => systemrequest.get('/system/user/current')

export const addUserItem = (params) =>
  systemrequest.post('/system/user', params)

export const removeUserItem = (userIds) =>
  systemrequest.delete(`/system/user/${userIds}`)

export const editUserItem = (params) =>
  systemrequest.put('/system/module', params)
