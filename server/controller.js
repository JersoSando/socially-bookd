const sequelize = require('./sequelize')

module.exports = {
    signUp: async(req, res) => {
        const {firstName, lastName, email, password} = req.body
        const data = await sequelize.query(`SELECT email FROM users WHERE email = '${email}'`)
        if (data[0].length === 0){
            sequelize.query(`INSERT INTO users (first_name, last_name, email, password) VALUES('${firstName}', '${lastName}', '${email}', '${password}')`).then(data => res.status(200).send(`You're registered`)).catch(err => console.log(err))
        }else {
            return res.status(400).send(`Can't be registered`)
        }
    },
    logIn: async(req, res) => {
        const {email, password} = req.body
        const data = await sequelize.query(`SELECT first_name, email, password FROM users WHERE email = '${email}' AND password = '${password}'`)
        console.log('what is login data', data)
        if (data[0]) {
            res.status(200).send(`Hello, ${data[0][0].first_name}`)
        } else {
            res.status(400).send(`User not found`)
        }
    },
    createPost: async(req, res) => {
        const {text} = req.body
        const data = await sequelize.query(`INSERT INTO posts (post_text) VALUES ('${text}')`)
        console.log('what is createpost data', data)
        const dataTwo = await sequelize.query(`SELECT * FROM posts`)
        console.log('what is datatwo', dataTwo)
        return res.status(200).send(dataTwo[0]);
    },
    getPost: async(req, res) => {
        const data = await sequelize.query(`SELECT * FROM posts`)
        res.status(200).send(data[0])
    },
    deletePost: async(req, res) => {
        const {id} = req.params
        console.log('what is id', typeof id)
        await sequelize.query(`DELETE FROM posts WHERE post_id = ${id.toString()} RETURNING posts `)
        const updatedList = await sequelize.query(`SELECT * FROM posts`)
        res.status(200).send(updatedList[0])
    }
}