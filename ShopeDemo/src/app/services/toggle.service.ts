import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private toggleViewP:BehaviorSubject<String> =
   new BehaviorSubject<String>("VProductOff");

  get viewProductGet(){
    return this.toggleViewP.asObservable();
  }
  set viewProductSet(val:String){
    this.toggleViewP.next(val);
  }
}
