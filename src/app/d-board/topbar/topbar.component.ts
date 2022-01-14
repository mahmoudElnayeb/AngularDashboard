import { Component, DoCheck, OnInit } from '@angular/core';
import { SharedServService } from 'src/app/shared-serv.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit,DoCheck{
  ischeck=false
  lang:any
  eng: any;

  constructor(private share:SharedServService) {
   }
  ngDoCheck(): void {
    this.ischeck= this.share.getIsChecked().value
    this.lang=this.share.getLang().value=="en"?true:false
    if(this.lang){
      let ele = document.getElementById('head')
      ele?.classList.remove("hea")
      ele?.classList.add("heade")
    }else{
      let ele = document.getElementById('head')
      ele?.classList.add("hea")
      ele?.classList.remove('heade')
    }
    this.eng=(this.ischeck && this.lang)
    console.log(this.eng)
    // if(this.ischeck && this.lang){
    //   let ele = document.getElementById('head')
    //   ele?.classList.add("ch")
    // }
    // else{
    //   let ele = document.getElementById('head')
    //   ele?.classList.remove("ch")
    // }
}

  ngOnInit(): void {

  }

}
