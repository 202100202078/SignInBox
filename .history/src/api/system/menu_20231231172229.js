import systemrequest from '@/utils/systemRequest'
import { pa } from 'element-plus/es/locale'

export const getMenuList = (params) =>
  systemrequest.get('/system/module/list', {
    params
  })


export const addMenuItem = (params) => systemrequest.post('')