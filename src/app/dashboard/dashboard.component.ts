import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SideMenuComponent } from "@shared";

@Component({
  imports: [RouterModule, SideMenuComponent],
  templateUrl: "./dashboard.component.html",
  styles: ``,
})
export default class DashboardComponent {}
