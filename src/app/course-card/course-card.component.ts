import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input({ required: true }) course: Course;

  @Input({ required: true })
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("Card Component: Button Click");

    this.courseEmitter.emit(this.course);
  }

  ngOnInit() {
    console.log("Icon URL:", this.course.iconUrl);
  }
}
