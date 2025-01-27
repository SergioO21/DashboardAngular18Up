import { Component } from "@angular/core";
import { HeavyLoaderSlowComponent } from "@shared/heavy-loaders";
import { TitleComponent } from "@shared";

@Component({
  standalone: true,
  imports: [HeavyLoaderSlowComponent, TitleComponent],
  templateUrl: "./defer-views.component.html",
  styles: ``,
})
export default class DeferViewsComponent {}
