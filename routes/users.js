import express from "express";
import { getUser, createUser, findUser, deleteUser, modifyUser } from "../controlers/users.js";
const router = express.Router();

router.get("/", getUser)

router.post("/", createUser)

router.get("/:id", findUser)

router.delete("/:id", deleteUser)

router.patch("/:id", modifyUser)

export default router;