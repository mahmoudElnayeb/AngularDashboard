import { Component, DoCheck, OnInit } from '@angular/core';
import { SharedServService } from '../shared-serv.service';

@Component({
  selector: 'app-d-board',
  templateUrl: './d-board.component.html',
  styleUrls: ['./d-board.component.css']
})
export class DBoardComponent implements OnInit , DoCheck {

  checked=false
  ischeck=false
  lang:any
  constructor(private share:SharedServService) { }
  ngDoCheck(): void {
    this.share.assignIsChecked(this.checked)
    this.ischeck= this.share.isChecked.value
   this.lang=this.share.getLang().value==="en"?true:false
  //  if(this.lang){
  //   let ele = document.getElementById('bo')
  //   ele?.classList.remove("rtl")
  //   ele?.classList.add("body")
  // }else{
  //   let ele = document.getElementById('bo')
  //   ele?.classList.add("rtl")
  //   ele?.classList.remove('body')
  // }
  }

  ngOnInit(): void {
  }

}
