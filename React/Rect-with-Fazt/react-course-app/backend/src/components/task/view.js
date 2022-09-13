import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    // res.header()
    res.send("task");
})

router.get("/create", (req, res) => {
    res.send("Craete Task");
})

export default router;