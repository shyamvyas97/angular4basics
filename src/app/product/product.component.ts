import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

    title = 'qwerty';
    itemCount = 10;

    addItem() {
      this.itemCount++;
    }

}
