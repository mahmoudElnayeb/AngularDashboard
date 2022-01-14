import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DBoardRoutingModule } from './d-board-routing.module';
import { DBoardComponent } from './d-board.component';
import { MyDashComponent } from './my-dash/my-dash.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { TopbarModule } from './topbar/topbar.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DBoardComponent,
    MyDashComponent,
    LeftmenuComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    DBoardRoutingModule,
    TopbarModule,
    FormsModule,
    NzSwitchModule,
    TranslateModule.forChild()
  ]
})
export class DBoardModule { }
