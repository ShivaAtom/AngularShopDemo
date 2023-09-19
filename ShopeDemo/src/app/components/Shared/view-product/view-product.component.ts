import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  classOn$!:Observable<String>;

  constructor(private ser:ToggleService){
    this.classOn$ = ser.viewProductGet;
  }
  closeClick(){this.ser.viewProductSet="VProductOff"}
}
