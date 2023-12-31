import systemrequest from '@/utils/systemRequest'

export const getApiList = () => systemrequest.get('/system/Api/current')

export const addApiItem = (params) => systemrequest.post('/system/Api', params)

export const removeApiItem = (ApiIds) =>
  systemrequest.delete(`/system/Api/${ApiIds}`)

export const editApiItem = (params) => systemrequest.put('/system/Api', params)
