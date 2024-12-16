const uuid = require('uuid').v4

const users = [
    {id: '1', name: 'Felipe Suguiura', email: 'felipesuguiura.pro@gmail.com', password: '123456'},
    {id: '2', name: 'John Wick', email: 'johnwick.pro@gmail.com', password: '654321'}
]

module.exports = {
    getAllUsers: () => users,

    getUserById: (id) => users.find(user => user.id === id),

    getUserByEmail: (email) => users.find(user => user.email === email),

    createUser: (name, email, password) =>{
        const newUser = {
            id: uuid(),
            name,
            email,
            password
        }
        users.push(newUser)
        return newUser
    }
}