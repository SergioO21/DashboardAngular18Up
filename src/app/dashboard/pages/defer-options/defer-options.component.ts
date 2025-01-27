import { Component } from "@angular/core";
import { HeavyLoaderFastComponent } from "@shared/heavy-loaders";
import { TitleComponent } from "@shared";

@Component({
  standalone: true,
  imports: [HeavyLoaderFastComponent, TitleComponent],
  templateUrl: "./defer-options.component.html",
  styles: ``,
})
export default class DeferOptionsComponent {}
