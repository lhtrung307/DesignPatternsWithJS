let Course = require("./Course");
let CourseGroup = require("./CourseGroup");

let django_course = new Course("Django Course", 20);
let nodejs_course = new Course("Node.JS Course", 15);

let html_course = new Course("HTML Course", 10);
let css_course = new Course("CSS Course", 13);

let front_end_course = new CourseGroup("Front end Course", [
  html_course,
  css_course
]);
let back_end_course = new CourseGroup("Back end Course", [
  django_course,
  nodejs_course
]);

console.log(front_end_course.total());
front_end_course.print();

console.log(back_end_course.total());
back_end_course.print();

let courses = new CourseGroup("Courses", [front_end_course, back_end_course]);

console.log(courses.total());
courses.print();
