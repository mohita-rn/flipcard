import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { AnimationService, AnimationBuilder } from 'css-animator';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('myvisibility', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class HomePage {
  visibleState = 'visible';
  private animator: AnimationBuilder;
  @ViewChild('animcss', {static: false}) animcss: ElementRef;
  
  constructor(public navCtrl: NavController, animationService: AnimationService)  {
    this.animator = animationService.builder();
  }

  animateElem() {
    this.animator.setType('flipInX').show(this.animcss.nativeElement);
  }

  toggleVisible() {
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  }
}
