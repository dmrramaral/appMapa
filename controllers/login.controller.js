// Array de usuários com dados iniciais
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
    }
]

// Função para criar um novo usuário
const create = (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(user);
}

// Função para atualizar um usuário existente
const update = (req, res) => {
    const id = req.params.id;

    users.map(function(valor, index){
        if(valor.id == id){
            users[index] = req.body;
            res.send(users[index]);
        }
    });

    if(!users){
        res.send("Usuário não encontrado");
    }
}

// Função para excluir um usuário
const deleted = (req, res) => {
    const id = req.params.id;

    users.map(function(valor, index){
        if(valor.id == id){
            users.splice(index, 1);
            res.send(users);
        }
    });

    if(!users){
        res.send("Usuário não encontrado");
    }
}

// Função para encontrar todos os usuários
const findAll = (req, res) => {
    res.send(users);
}

// Função para encontrar um usuário por ID
const findById = (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    res.send(user);
}

// Exporta as funções para serem usadas em outro lugar
module.exports = {
    findById,
    findAll,
    create,
    update,
    deleted
};
