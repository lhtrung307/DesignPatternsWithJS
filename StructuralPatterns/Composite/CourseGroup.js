class CourseGroup {
  constructor(title, composite = []) {
    this.title = title;
    this.composite = composite;
  }

  total() {
    return this.composite.reduce(
      (result, course) => result + course.total(),
      0
    );
  }

  print() {
    console.log(`*********** ${this.title} ***********`);
    this.composite.forEach((item) => item.print());
    console.log(`**********************`);
  }
}

module.exports = CourseGroup;
