import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nuit de l\'info 2023';

  public isDislexiqueModeActivated = false;


  ngOnInit(): void {
    initFlowbite();
    this.isDislexiqueModeActivated = localStorage.getItem("isDislexiqueModeActivated") == "true" ?? false;
  }

  handleChangeConfig(isActivated: boolean) {
    this.isDislexiqueModeActivated = isActivated;
  }

}
