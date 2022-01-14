import { DoCheck, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SharedServService } from 'src/app/shared-serv.service';

@Component({
  selector: 'app-my-dash',
  templateUrl: './my-dash.component.html',
  styleUrls: ['./my-dash.component.css']
})
export class MyDashComponent implements OnInit , DoCheck{
  checked=false
  constructor(private share:SharedServService) { }
  ngDoCheck(): void {
    this.share.assignIsChecked(this.checked)



  }

  ngOnInit(): void {
  }


}
