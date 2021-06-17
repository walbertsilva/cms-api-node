const jwt = require("jsonwebtoken");
const JWTSecret = "SenhaSecreta2021";

function auth(req, res, next){
    
	const authToken = req.headers['authorization'];  
  
    if (authToken != undefined){
  
        const bearer = authToken.split(' ');
        var token = bearer[1];
  
        console.warn(token);
  
        jwt.verify(token,JWTSecret,(err, data) => {
            if (err){
                res.status(401);
                res.json({err:"Token inválido!"});
            }else{
  
                req.token = token;
                req.loggedUser = {name: data.name };
                req.empresa = "LABSIT";
  
                next();
            }
        });
    } else {
        res.status(401);
        res.json({err:"Token inválido!"});
    } 
}

module.exports = auth;