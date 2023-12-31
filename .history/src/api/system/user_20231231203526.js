import systemrequest from '@/utils/systemRequest'

export const getUserList = () => systemrequest.get('/system/user/current')

export const addUserItem = (params) =>
  systemrequest.post('/system/user', params)

export const removeUserItem = (moduleId) =>
  systemrequest.delete(`/system/module/${moduleId}`)

export const editUserItem = (params) =>
  systemrequest.put('/system/module', params)
