import systemrequest from '@/utils/systemRequest'

export const getMenuList = (params) =>
  systemrequest.get('/system/system/module/list',)
