import systemrequest from '@/utils/systemRequest'

export const getApiList = (params) =>
  systemrequest.get('/api/service/list', {
    params
  })

export const addApiItem = (params) => systemrequest.post('/api/service', params)

export const removeApiItem = (apiIds) =>
  systemrequest.delete(`/api/service/${apiIds}`)

export const editApiItem = (params) => systemrequest.put('/api/service', params)
