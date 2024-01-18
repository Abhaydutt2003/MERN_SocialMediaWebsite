import jwt from 'jsonwebtoken';


import dotenv from 'dotenv';
dotenv.config();

//next because this is a middleware
const verifyJwt = (req,res,next)=>{
    //in some places it starts with a , while somewhere it starts with A
    const authHeader = eq.headers.authorization || req.headers.Authorization ;
    if(!authHeader)return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if(err)return res.sendStatus(403);//invalid token
        //TODO

    })
}

export default verifyJwt;
