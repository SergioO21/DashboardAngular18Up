import { Component, inject } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";
import { MatLineModule } from "@angular/material/core";

@Component({
  selector: "app-options-bottom-sheet",
  imports: [MatListModule, MatLineModule],
  templateUrl: "./options-bottom-sheet.component.html",
  styleUrl: "./options-bottom-sheet.component.css",
})
export class OptionsBottomSheetComponent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<OptionsBottomSheetComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    console.log("openLink", event);
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
