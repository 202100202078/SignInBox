import systemrequest from '@/utils/systemRequest'

export const getMenuList = () => systemrequest.get('/system/module/getRouters')

export const filterMenuList = (params) =>
  systemrequest.get('/system/module/list', {
    params
  })

export const getTreeSelect = () =>
  systemrequest.get('/system/module/treeSelect')

export const getMenuItem = (moduleId) =>
  systemrequest.get(`/system/module/${moduleId}`)

export const addMenuItem = (params) =>
  systemrequest.post('/system/module', params)

export const removeMenuItem = (moduleId) =>
  systemrequest.delete(`/system/module/${moduleId}`)

export const editMenuItem = (params) =>
  systemrequest.put('/system/module', params)
