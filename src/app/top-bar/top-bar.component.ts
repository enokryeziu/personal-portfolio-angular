import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @ViewChild('myNav') myNav: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.myNav.nativeElement.style.height = "100%";
  }
  closeNav() {
    this.myNav.nativeElement.style.height = "0%";
  }
}
