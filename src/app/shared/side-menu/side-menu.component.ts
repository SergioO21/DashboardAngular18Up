import { Component } from "@angular/core";
import { routes } from "../../app.routes";

@Component({
  selector: "side-menu",
  standalone: true,
  imports: [],
  templateUrl: "./side-menu.component.html",
  styles: ``,
})
export class SideMenuComponent {
  menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(":"));

  constructor() {}
}
