import axios from "axios"
import { observable, action, makeObservable, runInAction } from "mobx"

class Auth {
  token = []
  baseURL = "https://localhost:7181/api/Auth"
  constructor() {
    makeObservable(this, {
      token: observable,
      postAuth: action,
    })
  }

  postAuth(data) {
    return new Promise((resolve, reject) => {
      axios.post(this.baseURL, data).then((res) => {
        runInAction(() => {
          console.log(res)
          sessionStorage.setItem("token", res.data.token)
        })
        resolve(res.status)
      })
    })
  }
}
export default new Auth()
