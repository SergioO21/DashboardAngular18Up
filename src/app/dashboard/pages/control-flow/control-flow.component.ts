import { Component, signal } from "@angular/core";
import { TitleComponent } from "@shared";

type Grade = "A" | "B" | "C";

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: "./control-flow.component.html",
  styles: ``,
})
export default class ControlFlowComponent {
  showContent = signal(false);
  grade = signal<Grade>("A");
  frameworks = signal(["Angular", "Vue", "Svelte", "Qwik", "React"]);
  frameworksEmpty = signal([]);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}
