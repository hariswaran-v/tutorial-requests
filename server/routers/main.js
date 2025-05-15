import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  return res.send({
    success: true,
    message: "Hello enjoy developing web apps! in `HOME-PAGE`",
  });
});

router.post("/create", (req, res) => {
  const dataFromClient = { ...req.body, created_at: Date.now() };

  console.log(typeof dataFromClient, dataFromClient);

  return res.json(dataFromClient);
});

export default router;
