const User = require('../models/user');

const createUser = async(req,res) => {
    try {
        const newUser = new User(req.body);
        const {email} = newUser;
        const existing = await User.findOne({email});
        if (existing) {
            return res.status(400).json({ message: "User already exists."});
        }
        const savedData = await newUser.save();
        res.status(201).json({ message: "User created successfully."});
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users){
            return res.status(404).json({ message: "Users data not found."});
        }
        res.status(200).json(users);
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found."});
        }
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found."});
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedUser);
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteUser = async (req,res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found."});
        }
        await User.findByIdAndDelete(id);
        return res.status(200).json({ message: "User deleted successfully."});
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { createUser,getUsers,getUserById,updateUser,deleteUser };