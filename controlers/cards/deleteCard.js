const {RequestError} = require('../../helpers');
const {Card} = require('../../models/card');


const deleteCard = async(req, res) => {
    const {id} = req.params;
    const result = await Card.findByIdAndRemove(id);
    if(!result){
        throw RequestError(404, "Not found");
    } 
    res.status(200).json("Card was deleted.")
}


module.exports = deleteCard;