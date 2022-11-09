import { Component } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('myanim',[
        state('Enter',style({
          height:'10px'
        })),
      transition('void => Enter',[
        style({
         height:'0px'
        }),
        animate(
          '2.5s',
          style({
            height:'200px'
          }),
        )
      ]),
      transition('Enter => void',[
        animate(
          '2.1s',
          style({
            height:'100px'
          }),
        )
      ])
    ])    
  ]
})
export class AppComponent {
  title = 'angular-course';
  slideshow:boolean=false;
  slider(){
    this.slideshow=!this.slideshow;
  }
}
