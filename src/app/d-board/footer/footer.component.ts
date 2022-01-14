import { Component, OnInit } from '@angular/core';
import { SharedServService } from 'src/app/shared-serv.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
liveDate:any
ischeck=false
constructor(private share:SharedServService) {
 }
ngDoCheck(): void {
  this.ischeck= this.share.isChecked.value
}
  ngOnInit(): void {
    (()=>setInterval(()=>{
      let date= new Date()
      this.liveDate=date
    },1000))();
  }

}
