import { Component, computed, inject } from "@angular/core";
import { TitleComponent } from "@shared";
import { ActivatedRoute } from "@angular/router";
import { User } from "@interfaces";
import { toSignal } from "@angular/core/rxjs-interop";
import { switchMap } from "rxjs";
import { UsersService } from "@services";

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if (user()) {
      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

        <div>
          <h3>{{ user()!.first_name }} {{ user()?.last_name }}</h3>
          <p>{{ user()?.email }}</p>
        </div>
      </section>
    } @else {
      <p class="text-2xl">Loading User...</p>
    }
  `,
  styles: ``,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  user = toSignal<User | undefined>(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  titleLabel = computed(() => {
    if (!this.user()) {
      return "User Info";
    }

    return `${this.user()!.first_name} ${this.user()!.last_name}`;
  });
}
