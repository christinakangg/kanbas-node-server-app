import * as enrollmentsDao from "./dao.js"

export default function EnrollmentsRoutes(app) {

    // enroll user in course 
    app.post("/api/enrollments", async(req,res) => {
        const { userId, courseId } = req.body; 
        const status = await enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });

    // unenroll user from course 
    app.delete("/api/enrollments", async(req,res) => {
        const { userId, courseId } = req.query; 
        const status = await enrollmentsDao.unenrollUserInCourse(userId, courseId);
        res.send(status);
    });

    // get enrollments for user 
    app.get("/api/enrollments/:userId", async(req,res) => {
        const { userId } = req.params;
        const status = await enrollmentsDao.findEnrollmentsForUser(userId);
        res.send(status);
    });

    // get all enrollments 
    app.get("/api/enrollments", async(req,res) => {
        const enrollments = enrollmentsDao.findAllEnrollments();
        res.json(enrollments);
    });
}