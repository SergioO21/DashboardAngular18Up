import { booleanAttribute, Component, Input } from "@angular/core";

@Component({
  selector: "app-title",
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl m-5" [class.shadow-2xs]="withShadow">
      {{ title }}
    </h1>
  `,
  styles: ``,
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
