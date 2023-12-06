const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) next();
  else res.status(403).json({ massage: "Admin authentication failed" });
};

const userAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (user) next();
  else res.status(403).json({ massage: "User authentication failed" });
};
// app.get("/", (req, res) => {
//   res.status(200).json({ massage: "ajfdskfks" });
// });

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  if (ADMINS.find((a) => a.username === admin.username)) {
    res.status(403).json({ massage: "Admin already exists" });
  } else {
    ADMINS.push(admin);
    res.json({ massage: "Admin created succesfully" });
  }
});

app.post("/admin/login", adminAuthentication, (req, res) => {
  // logic to log in admin
  res.json({ masssge: "Admin login succesfully" });
});

app.post("/admin/courses", adminAuthentication, (req, res) => {
  // logic to create a course
  const course = req.body;
  course.id = Date.now();
  COURSES.push(course);

  res.json({ massage: "Course created succesfully", Courseid: course.id });
});

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  // logic to edit a course
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId);

  if (course) {
    Object.assign(course, req.body);
    res.json({ massage: "Course update succesfully" });
  } else {
    res.status(403).json({ massage: "Course is not found" });
  }
});

app.get("/admin/courses", (req, res) => {
  // logic to get all courses
  res.json({ course: COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const user = {
    username: req.body.username,
    password: req.body.password,
    purchasedCourses: [],
  };
  if (USERS.find((u) => u.username === user.username)) {
    res.status(403).json({ massage: "User Already exits" });
  } else {
    USERS.push(user);
    res.json({ massage: "User created succesfully" });
  }
});

app.post("/users/login", userAuthentication, (req, res) => {
  // logic to log in user
  res.json({ masssge: "User login succesfully" });
});

app.get("/users/courses", userAuthentication, (req, res) => {
  // logic to list all courses
  const filteredCourses = COURSES.filter((c) => c.published);
  res.json({ course: filteredCourses });
});

app.post("/users/courses/:courseId", userAuthentication, (req, res) => {
  // logic to purchase a course
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId);

  if (course) {
    req.body.user.purchasedCourses.push(course);
    res.json({ massage: "Course purchased succesfully" });
  } else {
    res.status(404).json({ massage: "Course not found" });
  }
});

app.get("/users/purchasedCourses", userAuthentication, (req, res) => {
  // logic to view purchased courses
  const purchasedCourses = req.user.filter((c) =>
    req.user.purchasedCourses.includes(c.id)
  );
  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
