import { computed, inject, Injectable, signal } from "@angular/core";
import type { State, UserResponse, UsersResponse } from "@interfaces";
import { HttpClient } from "@angular/common/http";
import { delay, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });
  users = computed(() => this.#state().users);
  loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>("https://reqres.in/api/users")
      .pipe(delay(2000))
      .subscribe((response) => {
        this.#state.set({
          loading: false,
          users: response.data,
        });
      });
  }

  getUserById(id: string) {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(2000),
        map((userResponse) => userResponse.data)
      );
  }
}
