import {User} from "../models/user.model.js";
import ApiError from "../handlers/ApiError.js";
import  bcrypt from "bcryptjs";
import {generateAccessToken} from "../utils/generateTokens.js";
// const user = User;

//register controller is starts here

const register = async (req,res) =>{
    try {
        //getting the properties from the frontend
        const {fullName,email,password} = req.body;
        if (!fullName || !email || !password){
            return res.status(400).json({success:false,
            message:"All the fields are required"})
        }
        //checking if user already exists or not
        const user = await User.findOne({email});
        if (user){
            return res.status(400).json({success:false,
            message:"User already exist"})
        }

        //hashing the password with bcrypt

        const hashedPassword = await bcrypt.hash(password,10);

        //if user is not already registered then register user
        await User.create({
            fullName,
            email,
            password:hashedPassword
        })

    return res.status(201).json({success:true,
    message:"Account created successfully"})
    }catch (error){
        console.log(error)
        throw new ApiError({statusCode:400,message : "Error while registering the user"});
    }
}

//::    register user ends here       :://

//-------------------------------------------------------------------------//

//::    login user starts here       :://

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All the fields are required" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            // For security, use a generic message
            return res.status(401).json({ success: false, message: "Email or password is incorrect" });
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ success: false, message: "Email or password is incorrect" });
        }

        // Generate token
        const token = generateAccessToken(res.status(200),user,`welcome ${user}`); // Adjust as per your function

        return res.status(200).json({
            success: true,
            message: `Welcome back ${user.fullName || user.email}`,
            token,
            user: { id: user._id, email: user.email, fullName: user.fullName }
        });
    } catch (e) {
        return res.status(500).json({ success: false, message: "Error while login" });
    }
}


//::    login user ends here       :://

//-------------------------------------------------------------------------//
export {
    register,
    login

}