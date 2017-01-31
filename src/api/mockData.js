const users = [
    {
        username: 'chenh1',
        password: 'test',
        id: '123123123'
    },
    {
        username: 'guest',
        password: 'guest',
        id: '456456456'
    }
];

 class LoginApi {
     static login(data) {
         return new Promise((resolve, reject) => {
             setTimeout(() => {
                 for (let i = 0; i < users.length; i++) {
                     if (users[i].username === data.username && users[i].password === data.password) {
                         resolve(users[i]);
                     } else {
                         reject({'errorMessage':"Username/password is incorrect"});
                     }
                 } 
             })
         })
     }
 }
 
 export default LoginApi;