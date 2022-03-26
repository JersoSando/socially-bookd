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
    }
}