// index, show, store, update, destroy
const User = require ('../models/User')

module.exports = {
    async store(req,res){
        const {email} = req.body; // buscando email de dentro de uma variavel

        let user  = await User.findOne({email});  // validando email no Banco de dados
        if(!user){ 
            user = await User.create({email}) // caso não exista criando o usuario
        }
        return res.json(user)
    }
};