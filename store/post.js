const posts = [
    { title: 'Post 1', date: new Date(), views: 22, comments: [1,2], _id: '1' },
    { title: 'Post 2', date: new Date(), views: 23, comments: [1,2], _id: '2' },
];

export const actions = {
    async fetchAdmin({}) {
      return await new Promise(resolve => {
          setTimeout(() => {
              resolve(posts);
          }, 1000);
      })
    },
    async update({}, id) {

    },
    async remove({}, { id, text }) {

    },
    async fetchAdminById({}, id) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts.find(p => p._id === id))
            }, 1000);
        })
    },
};