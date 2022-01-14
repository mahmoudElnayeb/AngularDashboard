import { Component, DoCheck, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedServService } from 'src/app/shared-serv.service';

@Component({
  selector: 'app-chang-lang',
  templateUrl: './chang-lang.component.html',
  styleUrls: ['./chang-lang.component.css']
})
export class ChangLangComponent implements OnInit  {
lang=this.share.getLang().value==="en"?true:false

  constructor(private share:SharedServService , private tarnslate:TranslateService) { }

  ngOnInit(): void {
  }
  changeLang(event:any){
    if(event === true){
    this.share.assignLang("en")
    this.lang= true
      }else{
     this.share.assignLang("ar")
     this.lang=false
      }
  }


}
