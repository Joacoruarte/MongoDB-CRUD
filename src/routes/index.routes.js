import { Router } from "express";
import { about, allTasks, deleteOneTask, newTask, oneTask, toggleDone, updatedOneTask } from "../controllers/task.controllers";
const router = Router();

router.get("/", allTasks);
router.get("/about", about);
router.post("/tasks/add", newTask);
router.get("/task/:id/edit", oneTask);
router.post("/task/:id/edit", updatedOneTask);
router.get("/task/:id/delete", deleteOneTask);
router.get("/task/:id/toggleDone", toggleDone);

export default router;
