import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductS } from 'src/app/interface/product';
import { MachineService } from 'src/app/services/machine.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  dataList!:Observable<ProductS[]>
  constructor(private serM:MachineService, private ser:ToggleService){
    this.dataList = serM.dataListPGet;
  }
  clickImg(id:number){
    this.ser.viewProductSet="VProductOn";
  }
}
