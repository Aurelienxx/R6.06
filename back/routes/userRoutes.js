import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/userController.js";

const router = express.Router();

// CREATE
router.post("/create", createUser);

// READ ALL
router.get("/", getAllUsers);

// READ ONE
router.get("/:id", getUserById);

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

export default router; // 🔑 export default pour ES Modules
