import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({ required: true }) course: Course;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Card Component: Button Click");

    this.courseEmitter.emit(this.course);
  }
}
