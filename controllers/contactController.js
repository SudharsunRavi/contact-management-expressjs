//ASYNC is used because MongoDB returns a promise

const asyncHandler = require("express-async-handler"); //used to handle errors in asynchronous middleware or route handlers
const contactModel = require("../models/contactModel"); //from models/contactModel.js which is a schema

const getContacts = asyncHandler(async (req, res)=>{
    const contacts=await contactModel.find();
    res.status(200).json(contacts);
})

const getContact= asyncHandler(async (req, res)=>{
    const contact=await contactModel.findById(req.params.id);
    if(!contact){
        return res.status(404).json({message: "Contact not found!"});
    }
    res.status(200).json(contact);
})

const createContact= asyncHandler(async (req, res)=>{
    const {name, email, phone}=req.body;
    if(!name || !email || !phone){
        return res.status(400).json({message: "Please provide all the fields!"});
    }
    const contact=await contactModel.create({name, email, phone});
    res.status(201).json(contact);
})

const updateContact= asyncHandler(async (req, res)=>{
    const contact=await contactModel.findById(req.params.id);
    if(!contact){
        return res.status(404).json({message: "Contact not found!"});
    }
    res.status(200).json(contact);

    const updateContact=await contactModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updateContact);
})

const deleteContact= asyncHandler(async (req, res)=>{
    const contact=await contactModel.findById(req.params.id);
    if(!contact){
        return res.status(404).json({message: "Contact not found!"});
    }
    res.status(200).json(contact);

    await contact.deleteOne();
    res.status(200).json({message: "Contact removed!"});
})

module.exports={getContacts, getContact, createContact, updateContact, deleteContact}