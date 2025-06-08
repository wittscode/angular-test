import { Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  courses = COURSES;
  // alsoCourses = COURSES[7]; // Display first 3 courses in the alsoCourses section

  @ViewChild("cardRef1", { read: ElementRef }) card?: ElementRef;

  @ViewChild("containerRef")
  containerDiv: ElementRef;

  onCourseSelected(course: Course) {
    console.log("App Component: bubbled event", course);
    console.log(this.card);
    console.log("Container Element:", this.containerDiv);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }

  // startDate = new Date(2023, 0, 1); // January 1, 2023
  // endDate = new Date(2023, 11, 31); // December 31, 2023
  title = COURSES[2]?.description || ""; // Example title from the first course
  // price = 99.99; // Example price

  ngOnInit() {
    // console.log("First course description:", this.title);
  }

  ngAfterViewInit() {
    console.log("Course card:", this.card);
  }
}
