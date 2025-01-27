import { Component } from "@angular/core";
import { TitleComponent } from "@shared";

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition" />

    <section class="flex justify-start">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: img1"
      />

      <div
        class="bg-blue-800 w-30 h-30 rounded bottom-16 right-16 fixed"
        style="view-transition-name: img2"
      ></div>
    </section>
  `,
})
export default class ViewTransition1Component {}
