import systemrequest from '@/utils/systemRequest'

export const getMenuList = (params) =>
  systemrequest.get('/system/module/getRouters', {
    params
  })

export const addMenuItem = (params) =>
  systemrequest.post('/system/module', params)

export const removeMenuItem = (moduleId) =>
  systemrequest.delete(`/system/module/${moduleId}`)

export const editMenuItem = (params) =>
  systemrequest.put('/system/module', params)
