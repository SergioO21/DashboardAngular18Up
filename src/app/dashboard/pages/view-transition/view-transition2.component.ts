import { Component } from "@angular/core";
import { TitleComponent } from "@shared";

@Component({
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: img1"
      />

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: img2"
      ></div>
    </section>
  `,
})
export default class ViewTransition2Component {}
