import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from "@angular/core";
import { ProductCardComponent } from "./ui/product-card/product-card.component";
import { TitleComponent } from "@shared";
import { Product } from "@interfaces";
import { interval, take, tap } from "rxjs";

@Component({
  selector: "app-input-output",
  imports: [ProductCardComponent, TitleComponent],
  templateUrl: "./input-output.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  products = signal<Product[]>([
    {
      id: 1,
      name: "Product 1",
      quantity: 0,
    },
    {
      id: 2,
      name: "Product 2",
      quantity: 0,
    },
  ]);

  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Products ${products.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      take(7)
    )
    .subscribe();

  updateProduct(product: Product, quantity: number): void {
    this.products.update((products) =>
      products.map((p) => (p.id === product.id ? { ...p, quantity } : p))
    );
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
}
