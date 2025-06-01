import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ds-button",
  standalone: true,
  templateUrl: "./ds-button.component.html",
  styleUrls: ["./ds-button.component.css"],
})
export class DsButtonComponent {
  @Input() variant: "primary" | "secondary" | "danger" = "primary";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: "button" | "submit" | "reset" = "button";
  @Output() clicked = new EventEmitter<MouseEvent>();

  handleClick(event: MouseEvent) {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}
