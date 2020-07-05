import { Component, OnInit, HostListener, ElementRef, Inject, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  expand=false;
  elementRef: ElementRef;
  @ViewChild('myname', {static: false}) myname:any; 
  tmpListener: any;
  drop = false;
  mobile;
  @HostListener("window:resize", []) 
  onResize() {
    var width = window.innerWidth;
    if (width < 426) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  };
  

  constructor(@Inject(ElementRef) elementRef: ElementRef,private renderer: Renderer) { 
    this.elementRef = elementRef;
    
  }
  

  ngOnInit() {

  }

  findAllElements(tel : Element) {
    if(this.drop === false) tel.setAttribute("style", "display:block;");
    else tel.setAttribute("style", "display:none;");
     return tel.nextElementSibling !== null ? this.findAllElements(tel.nextElementSibling): this.drop = !this.drop;
  }
  onClickMe(e){
    e = e.target.nextElementSibling;
    if(this.drop === false) e.setAttribute("style", "display:block;");
    else e.setAttribute("style", "display:none;");
     return e.nextElementSibling !== null ? this.findAllElements(e.nextElementSibling): this.drop = !this.drop;
  }
  @HostListener('document:click', ['$event'])
  onClick($event) {
     this.expand=true;
     setTimeout(() => {
      this.expand=false;
     }, 500)
  }

  


  
}
