import authRequest from '@/utils/authRequest.js'

export const login = ({ account, password }) =>
  authRequest.post('/auth/login', {
    identifier: account,
    credential: password,
    identityType: 'username'
  })

export const register = ({ account, password, repassword }) =>
  authRequest.post('/auth/register', {
    checkCred: repassword,
    credential: password,
    identifier: account,
    identityType: 'username'
  })
