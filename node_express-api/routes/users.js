import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  getUser,
  deleteUser,
} from "../controllers/users.js";
const router = express.Router();
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:Id", getUser);
router.delete("/:Id", deleteUser);
router.patch("/:Id", updateUser);
export default router;
