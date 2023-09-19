import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductS } from 'src/app/interface/product';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-aside-car',
  templateUrl: './aside-car.component.html',
  styleUrls: ['./aside-car.component.css']
})
export class AsideCarComponent {
  @Input() dataA!:String;
  dataList!:Observable<ProductS[]>;
  dataListF!:ProductS[];
  countMenos!:number;

  constructor(private serM:MachineService){
    this.dataList = serM.dataListPGet;
    serM.countCarGet.subscribe(data => this.countMenos = data);
    this.dataList.subscribe(
      (data)=>{
        this.dataListF = data;
      }
    )
  }
  clickMenosCar(id:number){
    this.countMenos--;
    this.serM.countCarSet = this.countMenos;
    this.dataListF[id].car--;
    this.serM.addListPSet = this.dataListF;

  }
}
