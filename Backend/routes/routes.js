const { response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')


router.post('/signup', async(request, response)=>{
    console.log(request.body)
    const signedUpUser = await new signUpTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        phone:request.body.phone
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


// router.get('/signin')
module.exports = router