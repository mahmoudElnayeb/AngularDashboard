import { Component, DoCheck } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SharedServService } from './shared-serv.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'Dashboard';
  constructor(private translate: TranslateService , private share: SharedServService) {
}
  ngDoCheck(): void {
    this.share.getLang().value === "en"?this.translate.use("en"):this.translate.use("ar")


  }
}
