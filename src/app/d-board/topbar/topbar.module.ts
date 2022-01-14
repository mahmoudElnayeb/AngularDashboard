import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarRoutingModule } from './topbar-routing.module';
import { TopbarComponent } from './topbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SearchComponent } from './search/search.component';
import { ChangLangComponent } from './chang-lang/chang-lang.component';
import { FormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { TranslateModule } from '@ngx-translate/core';
import { GuideComponent } from './guide/guide.component';

const component=[
    TopbarComponent,
    UserInfoComponent,
    SearchComponent
]
@NgModule({
  declarations: [
    TopbarComponent,
    UserInfoComponent,
    SearchComponent,
    ChangLangComponent,
    GuideComponent,

  ],
  imports: [
    CommonModule,
    TopbarRoutingModule,
    FormsModule,
    NzSwitchModule,
    NzButtonModule,
    TranslateModule.forChild()

  ],
  exports:[...component]
})
export class TopbarModule { }
