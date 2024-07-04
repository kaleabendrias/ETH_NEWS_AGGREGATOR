import { Router } from "express";
const contollerNews = require("../controllers/newsController");

const router = Router();

router.get("/news", contollerNews.getNews);

module.exports = router;
