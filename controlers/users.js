import { v4 as uuidv4 } from 'uuid';

let users = [
    {
        firstName: "dorin",
        lastName: "cujba",
        age: 10,
        id: uuidv4()

    },
    {
        firstName: "ion",
        lastName: "leu",
        age: 19,
        id: uuidv4()
    },
    {
        firstName: "marius",
        lastName: "sirbu",
        age: 23,
        id: uuidv4()

    }
];


export const getUser = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(users)
}

export const findUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`The user with id:${id} was deleted`);

}

export const modifyUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send("Update succesfully!")
}