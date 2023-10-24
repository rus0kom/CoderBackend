import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;

    try {

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            first_name,
            last_name,
            email,
            age,
            password: passwordHash,
        })

        const userSaved = await newUser.save();
        const token = await createAccesToken({ id: userSaved._id });

        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            first_name: userSaved.first_name,
            last_name: userSaved.last_name,
            email: userSaved.email,
            age: userSaved.age,
            cart: userSaved.cart,
            createdAt: userSaved.createdAt, 
            updateAt: userSaved.updatedAt,
        })     
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

export const renderRegisterForm = (req, res) => {
    res.render('users/register');
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const userFound = await userModel.findOne({email})

        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });
        
        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta"});

        const token = await createAccesToken({ id: userFound._id });
        
        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updateAt: userFound.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };

};

export const renderLoginForm = (req, res) => {
    res.render('users/login');
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async (req,res) => {
    const userFound = await userModel.findById(req.user.id)

    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

    return res.json({
        id: userFound._id,
        first_name: userFound.first_name,
        last_name: userFound.last_name,
        email: userFound.email,
        age: userFound.age,
        cart: userFound.cart,
        createdAt: userFound.createdAt,
        updateAt: userFound.updatedAt,
    })
}
