const { response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels');
const registerationTemplate = require('../models/registeration');
const chats = require('../models/chats');
const randomstring = require("randomstring");

router.post('/signup', async(request, response)=>{
    console.log(request.body)
    try{

        const signedUpUser = await new signUpTemplateCopy({
            fullName:request.body.fullName,
            email:'test',
            phone:'test',//request.body.phone
        })
        signedUpUser.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error =>{
            response.json(error)
        })
    }catch(err){
        console.log(err);
    }

})

router.get('/get-data/:fullName', async(req,res)=>{

    try{

        await signUpTemplateCopy.findOne({
            fullName:req.params.fullName
        }).then(data=>{
            res.json(data)
        }).catch(err=>res.json(err));
        
    }catch(err){
        console.log(err);
    }
})

router.get('/get-all-data', async(req,res)=>{

    try{

        await signUpTemplateCopy.find()
        .then(data=>{
            res.json(data)
            
        }).catch(err=>res.json(err));
        
    }catch(err){
        console.log(err);
    }
})


router.post('/update-mail/:fullName', async(req,res)=>{

    try{

        const data = await signUpTemplateCopy.findOneAndUpdate({
            fullName:req.params.fullName
        },{
            $set:{
                email:'gvnxyz@mail.com'
            }
        });

        if(data){
            res.sendStatus(200);
        }
        res.sendStatus(404);
        
    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }

    // {
    //     "_id": "61e7e2e4e8a037eebf3702d9",
    //     "fullName": "govind",
    //     "email": "smartk@hack.com",
    //     "phone": "987654321",
    //     "date": "2022-01-19T10:07:32.457Z",
    //     "__v": 0
    //   },
})


router.post('/delete-data/:fullName', async(req,res)=>{

    try{

        const data = await signUpTemplateCopy.findOneAndDelete({
            fullName:req.params.fullName
        });

        if(data){
            res.json(data);
        }
        res.sendStatus(404);
        
    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }


})


router.post('/registeration', async(request, response)=>{
    console.log(request.body)
    try{
        

        const signedUpUser = await new registerationTemplate({
            userName:request.body.userName,
            password:request.body.password
        
        })
        signedUpUser.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error =>{
            response.json(error)
        })
    }catch(err){
        console.log(err);
    }

})

router.post('/login', async(req,res)=>{

    try{

        const data = await registerationTemplate.findOne({
            userName:req.body.userName
        });

        if(data){
            // console.log(data)
            if(data.password==req.body.password){
                console.log("Login Successful");
                res.sendStatus(200);
            }else {
                console.log("invalid credentails");
                res.sendStatus(400);
            }
        }else{
            console.log("invalid credentails");
            res.sendStatus(400);
        }
        
    }catch(err){
        console.log(err);
        res.sendStatus(400);
    }
})

router.post('/message', async(request,response)=>{
    console.log(request.body)
    try{
        const id = randomstring.generate({
            length: 12,
            charset: 'alphabetic'
          });
          
        const signedUpUser = await new chats({
            userName:request.body.userName,
            message:request.body.message,
            message_id: id
        
        })

        signedUpUser.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error =>{
            response.json(error)
        })

    }catch(err){
        console.log(err);
    }

})

router.get('/get-messages', async(req,res)=>{

    try{

        await chats.find()
        .then(data=>{
            res.json(data)
            
        }).catch(err=>res.json(err));
        
    }catch(err){
        console.log(err);
    }
})

// router.get('/signin')
module.exports = router