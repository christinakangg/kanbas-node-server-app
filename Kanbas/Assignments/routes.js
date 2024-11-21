
import * as assignmentsDao from "../Assignments/dao.js";

export default function AssignmentRoutes(app) {
    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params; 
        const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
        res.json(assignments);
      });
    app.put("/api/assignments/:assignmentId", async(req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });
        
     app.delete("/api/assignments/:assignmentId", async(req, res) => {
       const { assignmentId } = req.params;
       const status = await assignmentsDao.deleteAssignment(assignmentId);
       res.send(status);
     });
}
