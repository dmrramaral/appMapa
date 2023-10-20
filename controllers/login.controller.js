

const users = [
    {
        id: 1,
        name: 'John',
        email: 'teste1@gmail.com',
        password: '12345678'
    },
    {
        id: 2,
        name: 'Mary',
        email: 'teste2@gmail.com',
        password: '12345678'
    },
    {
        id: 3,
        name: 'Peter',
        email: 'teste3@gmail.com',
        password: '12345678'
    },

]



const findAll = (req, res) => {
    
    res.send(users)
}

const findById = (req, res) => {

    const id = req.params.id
    const user = users.find(user => user.id == id)
    res.send(user)

}

const create = (req, res) => {
    const user = req.body
    users.push(user)
    res.send(user)
}




module.exports = {
    findById,
    findAll,
    create,

};

