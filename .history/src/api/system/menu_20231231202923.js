import systemrequest from '@/utils/systemRequest'

export const getMenuList = (params) =>
  systemrequest.get('/system/module/list', {
    params
  })

export const addMenuItem = (params) =>
  systemrequest.post('/system/module', params)

export const removeMenuItem = (moduleId) => 