const express =require('express');
const contact = require('../models/contact');
const member= require('../models/contact');

const route = express.Router();
// methode post
// request.body
route.post('/', async(req, res)=> {
try {
const addedContact = new member (req.body)
await addedContact.save()
res.status(200).send({msg:'successfully added contact', addedContact})
} catch (error) {
res.status(500).send({msg:'error while adding contact', error})
}
})
// methode get
//get doesnt have body
route.get('/', async(req, res)=> {
try {
    const contacts= await member.find()
    res.status(200).send({msg:'successfully found contact', contacts})
    
} catch (error) {
    res.status(500).send({msg:'list not found', error})
}
})

// methode delete
//uses req param
route.delete('/:ID', async(req, res)=> {
const {ID} = req.params
try {
const removedContact = await member.findByIdAndDelete(ID)
res.status(200).send({msg:'successfully removed contact', removedContact})

} catch (error) {
res.status(500).send({msg:'cannot be removed', error})

}
})
module.exports = route;