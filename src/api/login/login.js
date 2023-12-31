import authRequest from '@/utils/authRequest.js'

export const login = ({ account, password }) =>
  authRequest.post('/auth/login', {
    identifier: account,
    credential: password,
    identityType: 'username'
  })
