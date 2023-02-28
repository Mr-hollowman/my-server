const User = require('../models/signup.model')

const createUser = async (req, res) => {
    try {
        console.debug(req.body,"req.body")
        const { name, email, phone } = req.body

        const userExists = await User.findOne({ email })
        if (userExists) return res.status(200).json(userExists);

        const newUser = await User.create({
            name, email, phone
        })
        res.status(200).json(newUser)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

module.exports = {createUser}