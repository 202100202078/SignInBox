import systemrequest from '@/utils/systemRequest'

export const getMenuList = ({ moduleName, status }) =>
  systemrequest.get('/system/system/module/list')
