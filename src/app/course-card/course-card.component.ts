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

  @Input({ required: false })
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

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    } else if (this.course.category === "INTERMEDIATE") {
      return "intermediate";
    } else if (this.course.category === "ADVANCED") {
      return "advanced";
    } else {
      return "";
    }
  }

  cardStyles() {
    return {
      "text-decoration": "underline",
      color: "blue",
    };
  }

  cardBackgroundStyles() {
    return {
      // backgroundImage: `url(${this.course.iconUrl})`,
      "background-size": "cover",
      "background-position": "center",
    };
  }
}
