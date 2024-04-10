import axios from "axios"
import { observable, action, makeObservable, runInAction } from "mobx"

class Worker {
  workers = []
  baseURL = "https://localhost:7181/api/Workers"
  constructor() {
    makeObservable(this, {
      workers: observable,
      getWorkers: action,
      getByIdWorkers: action,
      postWorkers: action,
      putWorkers: action,
      deleteWorkers: action,
    })
    this.getWorkers()
  }
  getWorkers() {
    axios.get(this.baseURL).then((res) => {
      runInAction(() => {
        this.workers = res.data
      })
    })
  }
  getByIdWorkers(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseURL}/${id}`)
        .then((res) => {
          runInAction(() => {})
          resolve(res.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  getById(id) {
    return this.workers.find((s) => s.id == id)
  }
  postWorkers(worker) {
    return new Promise((resolve, reject) => {
      axios.post(this.baseURL, worker).then((res) => {
        if (res.status === 200) {
          runInAction(() => {
            this.workers.push(res.data)
          })
        }
        resolve(res.status)
      })
    }).catch((err) => {
      reject(err)
    })
  }
  putWorkers(id, worker) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${this.baseURL}/${id}`, worker)
        .then((res) => {
          if (res.status === 200) {
            runInAction(() => {
              const index = this.workers.findIndex((w) => w.id === id)
              if (index !== -1) {
                this.workers[index] = res.data
              } else {
                this.workers.push(res.data)
              }
            })
          }
          resolve(res.status)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  deleteWorkers(workerId) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${this.baseURL}/${workerId}`)
        .then((res) => {
          if (res.status === 200) {
            runInAction(() => {
              this.workers = this.workers.filter((worker) => worker.id !== workerId)
            })
          }
          resolve(res.status)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
export default new Worker()
