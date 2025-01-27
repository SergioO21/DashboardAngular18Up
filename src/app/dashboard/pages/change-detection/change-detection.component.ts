import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";
import { TitleComponent } from "@shared";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />

    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  frameworkAsSignal = signal({
    name: "Angular",
    releaseDate: 2016,
  });

  frameworkAsProperty = {
    name: "Angular",
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = "React";
      this.frameworkAsSignal.update((framework) => ({
        ...framework,
        name: "React",
      }));
      console.log("Change");
    }, 3000);
  }
}
