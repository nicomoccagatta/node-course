const app = require("../app.js"),
  expect = require("chai").expect,
  request = require("supertest"),
  mongoose = app.get("mongoose"),
  Task = mongoose.model("Task"),
  taskId = new mongoose.Types.ObjectId();

describe("Tasks controller tests", () => {

  let task1 = null;

  before(() => {
    return Task.deleteMany({})
      .then(() => {
        console.log("Tasks collection cleaned!");
        return Promise.all([
          Task.create({name: "Task 1"}),
          Task.create({name: "Task 2"}),
          Task.create({name: "Task 3"})
        ]);
      })
      .then(([createdTask1]) => {
        task1 = createdTask1;
      });
  });

  context("#GET /tasks", () => {

    it("should get all tasks", () => {
      return request(app)
        .get("/tasks")
        .expect(200)
        .then((res) => {
          expect(res.body.status).to.eql("success");
          expect(res.body.data.tasks).to.be.an("array");
          expect(res.body.data.tasks.length).to.eql(3);
        });
    });

  });

  context("#POST /tasks", () => {

    it("should create a task", () => {
      const body = {
        name: "Task POST test",
        status: "doing"
      };
      
      return request(app)
        .post("/tasks")
        .send(body)
        .expect(200)
        .then((res) => {
          expect(res.body.status).to.eql("success");
          expect(res.body.data.task.name).to.eql(body.name);
          expect(res.body.data.task.status).to.eql(body.status);
        });
    });

    it("should fail because name wasn't given", () => {
      return request(app)
        .post("/tasks")
        .send({})
        .expect(400)
        .then((res) => {
          expect(res.body.status).to.eql("error");
          expect(res.body.message).to.contain("Task name is mandatory");
        });
    });

    it("should fail because status isn't right", () => {
      return request(app)
        .post("/tasks")
        .send({name: "Failed task", status: "whatever"})
        .expect(400)
        .then((res) => {
          expect(res.body.status).to.eql("error");
          expect(res.body.message).to.contains("is not a valid enum value");
        });
    });

  });

  context("#GET /tasks/:taskId", () => {

    it("should get a task", () => {
      return request(app)
        .get(`/tasks/${task1.id}`)
        .expect(200)
        .then((res) => {
          expect(res.body.status).to.eql("success");
          expect(res.body.data.task.name).to.eql(task1.name);
        });
    });

    it("should fail because task wasn't found", () => {
      return request(app)
        .get(`/tasks/${taskId}`)
        .expect(404)
        .then((res) => {
          expect(res.body.status).to.eql("error");
          expect(res.body.message).to.contain("Task not found!");
        });
    });

  });

  context("#PUT /tasks/:taskId", () => {

    it("should update a task", () => {
      const body = {
        name: "Updated task"
      };

      return request(app)
        .put(`/tasks/${task1.id}`)
        .send(body)
        .expect(200)
        .then((res) => {
          expect(res.body.status).to.eql("success");
          expect(res.body.data.task.name).to.eql(body.name);
        });
    });

    it("should fail because task wasn't found", () => {
      return request(app)
        .put(`/tasks/${taskId}`)
        .expect(404)
        .then((res) => {
          expect(res.body.status).to.eql("error");
          expect(res.body.message).to.contain("Task not found!");
        });
    });

  });

  context("#DELETE /tasks/:taskId", () => {

    it("should delete a task", () => {
      return request(app)
        .delete(`/tasks/${task1.id}`)
        .expect(200)
        .then((res) => {
          expect(res.body.status).to.eql("success");
          expect(res.body.message).to.contain("Task successfully removed.");
        });
    });

    it("should fail because task wasn't found", () => {
      return request(app)
        .delete(`/tasks/${taskId}`)
        .expect(404)
        .then((res) => {
          expect(res.body.status).to.eql("error");
          expect(res.body.message).to.contain("Task not found!");
        });
    });

  });

});
