import { Component, effect, input, output } from "@angular/core";
import { Product } from "@interfaces";

@Component({
  selector: "product-card",
  imports: [],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.css",
})
export class ProductCardComponent {
  product = input.required<Product>();
  onIncrementQuantity = output<number>();

  incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  loginEffect = effect(() => {
    console.log(this.product().name);
  });
}
