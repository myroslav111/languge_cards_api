const {User} = require('../../models/user');
const { RequestError } = require('../../helpers');
// const bcrypt = require('bcrypt');


const register = async (req, res) => {
    const { name, email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw RequestError(409, "Email in use");
    }
    // хэширует пароль (второй параметр - 10 "крупинок соли" - дополнительные символы для шифрования)
    // const hashPassword = await bcrypt.hash(password, 10);
    // const result = await User.create({ password: hashPassword, email });
      const result = await User.create({ name, email });
      res.status(201).json({
        user: { 
          name: result.name,
          email: result.email,
     }
    });
}


module.exports = register;