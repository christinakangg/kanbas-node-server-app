const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };
const module = {
  id: 2, title: "Assignment 5 Module",
  description: "3.3.5 On Your Own Assignment",
  due: "2024-11-09", completed: false, score: 0,
}
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
      });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
      });
      
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
      res.json(module.title);
    });
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.title = newName;
      res.json(module);
    });

    app.get("/lab5/module/score", (req, res) => {
      res.json(module.score);
    });
    app.get("/lab5/module/score/:newScore", (req, res) => {
      const { newScore } = req.params;
      module.score = newScore;
      res.json(module);
    });

    app.get("/lab5/module/completed", (req, res) => {
      res.json(module.completed);
    });
    app.get("/lab5/module/completed/:newCompleted", (req, res) => {
      const { newCompleted } = req.params;
      module.completed = newCompleted;
      res.json(module);
    });

    app.get("/lab5/module/description", (req, res) => {
      res.json(module.description);
    });
    app.get("/lab5/module/description/:newDescription", (req, res) => {
      const { newDescription } = req.params;
      module.description = newDescription;
      res.json(module);
    });
    
  };
  