import systemrequest from '@/utils/systemRequest'

export const getUserList = (params) =>
  systemrequest.get('/system/user/current', {
    params
  })

export const addUserItem = (params) =>
  systemrequest.post('/system/module', params)

export const removeUserItem = (moduleId) =>
  systemrequest.delete(`/system/module/${moduleId}`)

export const editUserItem = (params) =>
  systemrequest.put('/system/module', params)
