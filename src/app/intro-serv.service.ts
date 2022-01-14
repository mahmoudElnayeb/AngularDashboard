import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as introJs from 'intro.js';

@Injectable({
  providedIn: 'root'
})
export class IntroServService {
   introSteps = new BehaviorSubject([])
   intro= introJs()
  constructor() { }

  createIntro(){
    let introStep = this.getIntroSteps().value
    console.log("staps", introStep)
    this.intro.setOptions({
     hideNext:true,
     hidePrev:true,
     doneLabel:" That is Ok ",
     prevLabel:" Back",
     disableInteraction:true,
     exitOnEsc:true,
     keyboardNavigation:true,
     overlayOpacity:1,
    scrollToElement:true,
    showProgress:true,
    skipLabel:"close",
    showBullets:true,
    nextLabel:"Next",
    steps:introStep,
    hintAnimation:true,
    showStepNumbers:true,

    }).start()

  }

  assignIntroSteps(steps:any){
    this.introSteps.next(steps)
  }
  getIntroSteps(){
    return this.introSteps
  }
}
