import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// :: Access Token Starts here :: //
const generateAccessToken = (res,user,message)=>
      {
          const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN,{expiresIn: "30d"});
          return res.status(200).
          cookie("token",token,{
              httpOnly:true,
              sameSite:'strict',
              maxAge:30 * 24 * 60 * 60 * 1000 //for 30days
          }
          ).json({
              success:true,
              message:"Access code generated"
          })

      }

// :: Access Token Ends here :: //

//-----------------------------------------------------------------------------//

// :: Refresh Token Starts here :: //


// :: Refresh Token Ends here :: //

//-----------------------------------------------------------------------------//


export {
    generateAccessToken
}