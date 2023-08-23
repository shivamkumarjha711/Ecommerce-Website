import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const {name, email, password, phone, address, answer } = req.body;
        // validation
        if (!name) {
            return res.send({message: 'Name is Required'})
        }
        if (!email) {
            return res.send({message: 'Email is Required'})
        }
        if (!password) {
            return res.send({message: 'Password is Required'})
        }
        if (!phone) {
            return res.send({message: 'Phone is Required'})
        }
        if (!address) {
            return res.send({message: 'Address is Required'})
        }
        if (!answer) {
            return res.send({message: 'Answer is Required'})
        }

        // check user
        const existingUser = await userModel.findOne({email});
        // existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Register please login'
            })
        }
        // register user
        const hashedPassword = await hashPassword(password);
        // save user in DB
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            answer
        }).save();

        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user,
          });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
};

export const loginController = async(req, res) => {
    try {
        const {email, password} = req.body;
        // validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: 'Invalid email or, password'
            });
        };
        // check user
        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registerd'
            });
        };
        // matching password
        const matchPassword = await comparePassword(password, user.password);
        if (!matchPassword) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            });
        };
        // token
        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        return res.status(200).send({
            success: true,
            message: 'Login successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        });
    };
};

// forgot password controller
export const forgotPasswordController = async (req, res) => {
    try {
        const {email, question, newPassword} = req.body;
        // validation
        if (!email) {
            res.status(400).send({message: 'Email is required'})
        }
        if (!answer) {
            res.status(400).send({message: 'Answer is required'})
        }
        if (!newPassword) {
            res.status(400).send({message: 'New Password is required'})
        }
        // check
        const user = await userModel.findOne({email, answer});
        // validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Wrong Email or Answer'
            })
        }
        // hashing password
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashed});
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong',
            error
        })
    }
}

// test controller
export const testController = (req, res) => {
    res.send("proteted based")
}
