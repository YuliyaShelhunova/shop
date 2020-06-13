import { Component, OnInit, Input } from '@angular/core';
import { OrderModel } from '../../model/order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: OrderModel;

  constructor() { }

  ngOnInit(): void {
  }

}
