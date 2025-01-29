import { Component } from "@angular/core";
import { routes } from "../../app.routes";
import { RouterModule } from "@angular/router";

@Component({
  selector: "side-menu",
  imports: [RouterModule],
  templateUrl: "./side-menu.component.html",
  styles: ``,
})
export class SideMenuComponent {
  menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path && route.path !== "**")
    .filter((route) => !route.path?.includes(":"));

  constructor() {}
}
