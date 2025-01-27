import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { UsersService } from "@services";
import { TitleComponent } from "@shared";

@Component({
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: "./users.component.html",
  styles: ``,
})
export default class UsersComponent {
  usersService = inject(UsersService);
}
