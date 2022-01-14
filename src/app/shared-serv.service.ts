import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServService {
isChecked= new BehaviorSubject(false)
lang = new BehaviorSubject('en')
  constructor() { }
  assignIsChecked(bol:any){
    this.isChecked.next(bol)
  }
  getIsChecked(){
    return this.isChecked
  }
  assignLang(lang:any){this.lang.next(lang)}
  getLang(){return this.lang}
}
