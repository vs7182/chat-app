import {Router} from 'express';
import {verifyToken} from "../middlewares/AuthMiddleware.js"
import {searchContacts,getContactsForDMList, getAllContacts} from "../controllers/ContactsController.js"


const router = Router();
router.post("/search",verifyToken,searchContacts);
router.get("/get-contact-for-dm",verifyToken,getContactsForDMList);
router.get("/get-all-contacts",verifyToken,getAllContacts);

export default router;