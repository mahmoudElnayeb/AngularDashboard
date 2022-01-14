import { Component, DoCheck, OnInit } from '@angular/core';
import { SharedServService } from 'src/app/shared-serv.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit ,DoCheck{
  ischeck=false;
   lang:any
  constructor(private share:SharedServService) { }
  ngDoCheck(): void {
    this.ischeck= this.share.isChecked.value
    this.lang =this.share.getLang().value==='en'?true:false
    // if(!this.lang){
    //   let ele = document.getElementById('left')
    //   ele?.classList.remove("leftMenu")
    //         ele?.classList.add("rtl")

    // }else{
    //   let ele = document.getElementById('left')
    //   ele?.classList.remove("rtl")
    //   ele?.classList.add("leftMenu")
    // }
  }
  ngOnInit(): void {

  }

}
