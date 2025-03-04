const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3010;

app.use(express.json());
app.use(cors());

const users = [
    { username: "Messi", age: 35, email: "Messi@gmail.com" },
    { username: "Ronaldo", age: 40, email: "Ronaldo@gmail.com" },
    { username: "Neymar", age: 30, email: "Neymar@gmail.com" }
];

app.route('/post')
    .get((req, res) => res.json({ Message: "User Found", Data: users }))
    .post((req, res) => {
        const { username, age, email } = req.body;
        if (!username || !age || !email || isNaN(age)) 
            return res.status(400).json({ Message: "Enter all details correctly" });

        const newUser = { username, age: Number(age), email };
        users.push(newUser);
        res.json({ Message: "User Added", User: newUser });
    });

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));