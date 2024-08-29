import { Router } from "express";
import logger from "./logger.js";

const router = Router();

let value = 0;

router.get("/home", (req, res) => {
  // console.log("/home endpoint");
  logger.info("/home endpoint");
  try {
    if (value === 1) logger.warn("This is a warning");
    if (value === 2) throw new Error("There is an error");
  } catch (error) {
    logger.error(error);
    res.status(400).send("FAILURE\n");
    return;
  }
  res.status(200).send("SUCCESS\n");
  logger.debug("This is the end")
  return;
});

export default router;
