import { Component } from "@angular/core";
import { HeavyLoaderFastComponent } from "@shared/heavy-loaders";
import { TitleComponent } from "@shared";

@Component({
  imports: [HeavyLoaderFastComponent, TitleComponent],
  templateUrl: "./defer-options.component.html",
  styles: ``,
})
export default class DeferOptionsComponent {}
