//ASYNC is used because MongoDB returns a promise

const asyncHandler = require("express-async-handler"); //used to handle errors in asynchronous middleware or route handlers

const getContacts = asyncHandler(async (req, res)=>{
    res.status(200).json({message: "Get all contacts"});
})

const getContact= asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Get contact with id: ${req.params.id}`});
})

const createContact= asyncHandler(async (req, res)=>{
    const {name, email, phone}=req.body;
    if(!name || !email || !phone){
        return res.status(400).json({message: "Please provide all the fields!"});
    }
    res.status(201).json({message: "Create new contact"});
})

const updateContact= asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Update contact with id: ${req.params.id}`});
})

const deleteContact= asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Delete contact with id: ${req.params.id}`});
})

module.exports={getContacts, getContact, createContact, updateContact, deleteContact}