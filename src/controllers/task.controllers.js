import Task from "../models/Task";

export const allTasks = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render("index", { tasks: tasks });
}

export const newTask = async (req, res) => {
    try {
      console.log(req.body);
      const task = Task(req.body);
      await task.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
}

export const about = (req, res) => {
    res.render("about");
}

export const oneTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      console.log(task);
      res.render("editing", { task });
    } catch (error) {
      console.log(error);
    }
}

export const updatedOneTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
}

export const deleteOneTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
}

export const toggleDone = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
}