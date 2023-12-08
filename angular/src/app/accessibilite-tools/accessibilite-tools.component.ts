import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accessibilite-tools',
  templateUrl: './accessibilite-tools.component.html',
  styleUrls: ['./accessibilite-tools.component.css'],
})
export class AccessibiliteToolsComponent implements OnInit {
  public isDislexiqueModeActivated = false;
  @Output() changeConfigEvent = new EventEmitter<any>();

  ngOnInit(): void {
    this.isDislexiqueModeActivated = localStorage.getItem("isDislexiqueModeActivated") == "true" ?? false;
  }
  changeData(): void {
    localStorage.setItem("isDislexiqueModeActivated", this.isDislexiqueModeActivated.toString());
    this.changeConfigEvent.emit(this.isDislexiqueModeActivated);
  }
}
