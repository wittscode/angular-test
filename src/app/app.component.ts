import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;
  // alsoCourses = COURSES[7]; // Display first 3 courses in the alsoCourses section

  @ViewChild("cardRef1", { read: ElementRef }) card?: ElementRef;

  @ViewChild("containerRef")
  containerDiv: ElementRef;

  @ViewChild("courseImage", { read: ElementRef })
  courseImage?: ElementRef;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  // cards!: import("@angular/core").QueryList<CourseCardComponent>;
  cards!: QueryList<ElementRef>;

  onCourseSelected(_course: Course) {
    // console.log("App Component: bubbled event", course);
    console.log(this.card);
    // console.log("Container Element:", this.containerDiv);
  }

  trackCourse(_index: number, course: Course) {
    return course.id;
  }

  // startDate = new Date(2023, 0, 1); // January 1, 2023
  // endDate = new Date(2023, 11, 31); // December 31, 2023
  title = COURSES[2]?.description || ""; // Example title from the first course
  // price = 99.99; // Example price

  ngOnInit() {
    // console.log("First course description:", this.title);
  }

  constructor() {
    // console.log("containerDiv:", this.containerDiv);
  }

  ngAfterViewInit() {
    // console.log("Course card:", this.card);
    // console.log("Card Element:", this.card?.nativeElement);
    // console.log("containerDiv:", this.containerDiv);
    // console.log("courseImage", this.courseImage);
    // this.courses[0].description = "test";

    this.cards.changes.subscribe((cards) =>
      console.log("Cards QueryList changed:", cards)
    );

    console.log("Cards QueryList:", this.cards);

    // console.log(this.cards);
  }

  onEditCourse() {
    this.courses.push({
      id: 11,
      description: "Angular 2 Material Course",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
      longDescription:
        "Build Applications with the official Angular Widget Library",
      category: "ADVANCED",
    });
  }
}
