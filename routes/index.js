const router = require("express").Router()

router.get("/", (req, res) => res.send("hello world"))
router.get("/register", (req, res) => res.send("hello world"))
router.post("/register", (req, res) => res.send("hello world"))
router.get("/login", (req, res) => res.send("hello world"))
router.post("/login", (req, res) => res.send("hello world"))
router.post("/profile/interests", (req, res) => res.send("hello world"))
router.get("/profile", (req, res) => res.send("hello world"))
router.get("/profile/linkedin", (req, res) => res.send("hello world"))
router.post("/clippings", (req, res) => res.send("hello world"))
router.post("/clippings/owned", (req, res) => res.send("hello world"))
router.post("/clippings/:id", (req, res) => res.send("hello world"))
router.post("/clippings/:id/friends/:username", (req, res) => res.send("hello world"))
router.get("/clippings/@/:username", (req, res) => res.send("hello world"))
router.get("/followers/:username", (req, res) => res.send("hello world"))
router.post("/followers/:username", (req, res) => res.send("hello world"))

module.exports = router