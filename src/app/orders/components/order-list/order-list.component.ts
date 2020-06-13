import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../model/order.model';
import { OrderService } from '../../services/order.service';
import { UserModel } from '../../model/user.model';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Array<OrderModel>;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
    });
  }

}
