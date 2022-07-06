import axios from 'axios'
import Auth from "../middleWare/Auth/Auth"
import { message } from 'antd'

class Account {
  constructor() {
    this.result = []
  }

  LoginApi = (data, setErr) => {
    const res = async () => {
      const resp = await axios
        .post('https://ips-backend-staging.finqalab.com/v1/credentials/login', {
          email: data.email,
          password: data.password,
        })
        .catch(function (error) {
          setErr(error.response.data.message)
          // message.error(error.response.data.message)
          console.log(error)
        })
      return resp
    }
    return res()
  }
  SignUp = (data, setErr) => {
    const res = async () => {
      // console.log('data oisss for signup >>>>>>>>>>', data)
      const resp = await axios
        .post('https://ips-backend-staging.finqalab.com/v1/credentials/signup', {
          email: data.email,
          password: data.password,
          displayName: data.name
        })
        .catch(function (error) {
          // console.log('signup api response error is =========', error)
          setErr(error.response?.data?.error?.error)
          // message.error(error.response.data.message)
          console.log(error)
        })
      return resp
    }
    return res()
  }
  ResendEmail = (setStatus) => {
    const res = async () => {
      const resp = await axios
        .post('https://ips-backend-staging.finqalab.com/v1/credentials/resend', {

          email: localStorage.getItem('Email')
        })
        .catch(function (error) {
          // console.log('signup api response error is =========', error)
          setStatus(error.response?.data?.error?.error)
          // message.error(error.response.data.message)
          console.log(error)
        })
      return resp
    }
    return res()
  }
  forgotPass = (email) => {
    const res = async () => {
      const resp = await axios
        .post('https://ips-backend-staging.finqalab.com/v1/credentials/resend', {
          email: email,
          status: "forgot"
        })
        .catch(function (error) {
          // console.log('signup api response error is =========', error)
          // message.error(error.response.data.message)
          console.log(error)
        })
      return resp
    }
    return res()
  }
  resendforgotPass = (email) => {
    const res = async () => {
      const resp = await axios
        .post('https://ips-backend-staging.finqalab.com/v1/credentials/resend', {
          email: email
        })
        .catch(function (error) {
          // console.log('signup api response error is =========', error)
          // message.error(error.response.data.message)
          console.log(error)
        })
      return resp
    }
    return res()
  }
  SendPassword = (pass, uid) => {
    const res = async () => {
      const resp = await axios
        .post('https://ips-backend-staging.finqalab.com/v1/credentials/forgot', {
          password: pass,
          uid: uid,
        })
        .catch(function (error) {
          // console.log('signup api response error is =========', error)
          // message.error(error.response.data.message)
          console.log(error)
        })
      return resp
    }
    return res()
  }
}
export default new Account()
