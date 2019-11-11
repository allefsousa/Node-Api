const Spot = require ('../models/Spot');
const User = require ('../models/User');


module.exports = {
    async store(req,res){
        // console.log(req.body);
        // console.log(req.file);

        const {filename} = req.file
        const {company, techs, price} = req.body
        const {user_id} = req.headers;

        /**
         * Validando se User existe
         */
        const user = await User.findById(user_id);
        if(!user){
            return res.status(400).json({erro:"Usuario Invalido !"})
        }


        const spot = await Spot.create({
            user:user_id,
            thumbnail:filename,
            company,
            techs:techs.split(',').map(tech =>tech.trim()),
            price

        })
        return res.json(spot);
    }
}