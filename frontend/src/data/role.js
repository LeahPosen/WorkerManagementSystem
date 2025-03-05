import axios from "axios"
import { action, makeObservable, runInAction } from "mobx"
import worker from "./worker"

class Role {
  baseURL = "https://localhost:7181/api/Role"
  token = `Bearer ${sessionStorage.getItem("token")}`

  constructor() {
    makeObservable(this, {
      deleteRoles: action,
    })
  }

  deleteRoles(tagId) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${this.baseURL}/${tagId}`, { headers: { Authorization: this.token } })
        .then((res) => {
          runInAction(() => {
            worker.getWorkers()
            // this.tags = this.tags.filter((tag) => tag.id !== tagId);
          })
          resolve(res.status)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default new Role()
