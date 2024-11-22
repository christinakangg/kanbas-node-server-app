import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserInCourse(userId, courseId)  {
  const { enrollments } = Database; 
  Database.enrollments = enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId));

}

export function findAllEnrollments() {
  return Database.enrollments; 
}

export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database; 
  const enrolledCourses = enrollments.filter(enrollment => enrollment.user === userId);
  return enrolledCourses; 
}


