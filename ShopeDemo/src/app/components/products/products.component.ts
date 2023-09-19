import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MachineService } from 'src/app/services/machine.service';
import { ToggleService } from 'src/app/services/toggle.service';
import { ProductS } from 'src/app/interface/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  dataList!:Observable<ProductS[]>;
  dataListNew!:ProductS[];
  countF!:number;

  constructor(private ser:ToggleService, private serM:MachineService){
    this.dataList = serM.dataListPGet;
    serM.countCarGet.subscribe(data => this.countF = data);
    this.dataList.subscribe(
      (data)=>{
        this.dataListNew = data;
      }
    )
  }
  clickButonIP(){
    this.ser.viewProductSet="VProductOn";
  }
  clickAgregarCar(id:number){
    this.countF++;
    this.serM.countCarSet = this.countF;
    this.dataListNew[id].car++;
    this.serM.addListPSet = this.dataListNew;
  }
}
