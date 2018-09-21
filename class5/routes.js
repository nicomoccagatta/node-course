module.exports = (app) => {

  const mongoose = app.get("mongoose"),
    taskControllers = require("./controllers/tasks")(mongoose);

  app.route("/tasks")
    .get(taskControllers.list)
    .post(taskControllers.create);


  app.route("/tasks/:taskId")
    .get(taskControllers.read)
    .put(taskControllers.update)
    .delete(taskControllers.remove);
  
};