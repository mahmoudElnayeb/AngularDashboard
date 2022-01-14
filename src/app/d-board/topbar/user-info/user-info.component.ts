import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedServService } from 'src/app/shared-serv.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  language:any
  lang: string;
  constructor(private share:SharedServService) {
   this.lang=this.share.getLang().value
   console.log(this.lang)
   }

  ngOnInit(): void {
  }


}
