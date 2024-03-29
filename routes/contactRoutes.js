const express=require('express');
const router=express.Router();

const {getContacts,getContact, createContact, updateContact, deleteContact}=require('../controllers/contactController');
const validateAccessToken = require('../middleware/accessTokenValidation');

// router.route("/").get(getContacts)
// router.route("/:id").get(getContact)
// router.route("/").post(createContact)
// router.route("/:id").put(updateContact)
// router.route("/:id").delete(deleteContact)

router.use(validateAccessToken);
router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

module.exports=router;

