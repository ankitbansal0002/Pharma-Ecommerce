import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, _id, dob } = req.body; // getting response body 
        // console.log(name,email,photo,gender,_id,dob);
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob: new Date(dob)
        }); // creating a user from the response
        return res.status(200).json({
            success: true,
            message: `Welcome ${user.name}`
        }); // return response to post request 
    }
    catch (error) {
        return res.status(200).json({
            success: false,
            message: `Error`
        });
    }
};
