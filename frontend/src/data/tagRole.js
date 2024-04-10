// import axios from "axios";
// import { observable, action, makeObservable, runInAction } from "mobx";

// class Tag {
//   tags = [];
//   baseURL = "https://localhost:7181/api/Tag";
//   constructor() {
//     makeObservable(this, {
//       tags: observable,
//       getTags: action,
//       getByIdTags: action,
//       postTags: action,
//       putTags: action,
//       deleteTags: action,
//     });
//     this.getTags();
//   }
//   getTags() {
//     axios.get(this.baseURL).then((res) => {
//       runInAction(() => {
//         this.tags = res.data;
//       });
//     });
//   }
//   getByIdTags(id) {
//     return new Promise((resolve, reject) => {
//       axios
//         .get(`${this.baseURL}/${id}`)
//         .then((res) => {
//           runInAction(() => {});
//           resolve(res.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   postTags(tag) {
//     return new Promise((resolve, reject) => {
//       axios.post(this.baseURL, tag).then((res) => {
//         if (res.status === 200) {
//           runInAction(() => {
//             this.tags.push(res.data);
//           });
//         }
//         resolve(res.status);
//       });
//     }).catch((err) => {
//       reject(err);
//     });
//   }

//   putTags(id, tag) {
//     return new Promise((resolve, reject) => {
//       axios
//         .put(`${this.baseURL}/${id}`, tag)
//         .then((res) => {
//           if (res.status === 200) {
//             runInAction(() => {
//               const index = this.tags.findIndex((w) => w.id === id);
//               if (index !== -1) {
//                 this.tags[index] = res.data;
//               } else {
//                 this.tags.push(res.data);
//               }
//             });
//           }
//           resolve(res.status);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   deleteTags(tagId) {
//     return new Promise((resolve, reject) => {
//       axios
//         .delete(`${this.baseURL}/${tagId}`)
//         .then((res) => {
//           if (res.status === 200) {
//             runInAction(() => {
//               this.tags = this.tags.filter((tag) => tag.id !== tagId);
//             });
//           }
//           resolve(res.status);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   getNameById(id) {
//     return this.tags.find((t) => t.id == id)?.name;
//   }
// }
// export default new Tag();

import axios from "axios"
import { observable, action, makeObservable, runInAction } from "mobx"

class Tag {
  tags = []
  baseURL = "https://localhost:7181/api/Tag"
  token = `Bearer ${sessionStorage.getItem("token")}`
  constructor() {
    makeObservable(this, {
      tags: observable,
      getTags: action,
      getByIdTags: action,
      postTags: action,
      putTags: action,
      deleteTags: action,
    })
    this.getTags()
  }

  getTags() {
    axios.get(this.baseURL, { headers: { Authorization: this.token } }).then((res) => {
      runInAction(() => {
        this.tags = res.data
      })
    })
  }

  getByIdTags(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseURL}/${id}`, { headers: { Authorization: this.token } })
        .then((res) => {
          resolve(res.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  postTags(tag) {
    return new Promise((resolve, reject) => {
      axios
        .post(this.baseURL, tag, { headers: { Authorization: this.token } })
        .then((res) => {
          if (res.status === 200) {
            runInAction(() => {
              this.tags.push(res.data)
            })
          }
          resolve(res.status)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  putTags(id, tag) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${this.baseURL}/${id}`, tag, { headers: { Authorization: this.token } })
        .then((res) => {
          if (res.status === 200) {
            runInAction(() => {
              const index = this.tags.findIndex((w) => w.id === id)
              if (index !== -1) {
                this.tags[index] = res.data
              } else {
                this.tags.push(res.data)
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

  deleteTags(tagId) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${this.baseURL}/${tagId}`, { headers: { Authorization: this.token } })
        .then((res) => {
          if (res.status === 200) {
            runInAction(() => {
              this.tags = this.tags.filter((tag) => tag.id !== tagId)
            })
          }
          resolve(res.status)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  getNameById(id) {
    return this.tags.find((t) => t.id == id)?.name
  }
}

export default new Tag()
