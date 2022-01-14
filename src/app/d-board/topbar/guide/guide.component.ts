import { Component, OnInit } from '@angular/core';
import { IntroServService } from 'src/app/intro-serv.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(public intro:IntroServService) {this.assignintroJs() }

  ngOnInit(): void {
  }
  assignintroJs()
{
  let steps:{element?:any,intro?:any}[]
  steps=[
    {
      intro:" Hello To DashBoard"
    },
    {
      element:".leftMenu",
      intro:" This Is Left Menu Has All Operations"
    },
    {
      element:".lang",
      intro:"You Can Change Lang Here"
    },
    {
      element:".search",
      intro:"You Can Search Here"
    },
    {
      element:".userInfo",
      intro:"You Can Logout And Show Your Info Here"
    },
    {
      element:".cards",
      intro:" This info About your Bussiness"
    }

  ]
  this.intro.assignIntroSteps(steps)
}
}
