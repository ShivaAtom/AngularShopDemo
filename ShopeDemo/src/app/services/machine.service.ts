import { Injectable } from '@angular/core';
import { Product, ProductS } from '../interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private dataListP:BehaviorSubject<ProductS[]> =
   new BehaviorSubject<ProductS[]>([]);
  private countC:BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get dataListPGet(){
    return this.dataListP.asObservable();
  }
  set updateList(newList:Product[]){
    let product:ProductS;
    let listPro:ProductS[] = [];
    newList.forEach((ele,id)=>{
      product = {
        id:id,
        pro:ele,
        car:0
      }
      listPro.push(product);
    })
    this.dataListP.next(listPro)
  }
  set addListPSet(listNew:ProductS[]){
    this.dataListP.next(listNew);
  }
  get countCarGet(){
    return this.countC.asObservable();
  }
  set countCarSet(i:number){
    this.countC.next(i);
  }
  logList(){
    this.dataListP.subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }
}
