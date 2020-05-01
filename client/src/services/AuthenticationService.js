import Api from '@/services/Api'

/*  Have an object that allows to call a register method that will hit the register endpoint
    Pass under credentials the email / password to this post method of the axios module.
    Post to the register end point of our express server, and use those credentials */
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
