const { RequestError } = require('../../helpers');
const { User } = require('../../models/user');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const loginUser = async(req, res) => {
    const { email } = req.body;
    const user =await User.findOne({ email });
    if (!user) {
        throw RequestError(401, "Email is wrong. You must register.");
    }
    
    // создает данные для кодирования
    const payload = {
        id: user._id,
    }
    // создает токен
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

    // сохраняет token юзера в базе данных
    await User.findByIdAndUpdate(user._id, { token });    


    res.status(200).json({
        token,
        user: {
            email: user.email,
            name: user.name,
        }
    });    
}


module.exports = loginUser;







// const { RequestError } = require('../../helpers');
// const { User } = require('../../models/user');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const { SECRET_KEY } = process.env;

// const login = async(req, res) => {
//     const { password, email } = req.body;
//     const user =await User.findOne({ email });
//     if (!user) {
//         throw RequestError(401, "Email or password is wrong");
//     }
    
//     // проверяет соответствие введенного пароля тому, который уже есть в базе
//     const passwordCompare = await bcrypt.compare(password, user.password);

//     if (!passwordCompare) {
//         throw RequestError(401, "Email or password is wrong");        
//     }
//     // создает данные для кодирования
//     const payload = {
//         id: user._id,
//     }
//     // создает токен
//     const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
//     // сохраняет token юзера в базе данных
//     await User.findByIdAndUpdate(user._id, {token})


//     res.status(200).json({
//         token,
//         user: {
//             email: user.email,
//             subscription: user.subscription,
//         }
//     });    
// }


// module.exports = login;