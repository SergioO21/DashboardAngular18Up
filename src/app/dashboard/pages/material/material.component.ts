import { Component, inject } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from "@angular/material/bottom-sheet";

import { TitleComponent } from "@shared";
import { OptionsBottomSheetComponent } from "./ui/options-bottom-sheet/options-bottom-sheet.component";

@Component({
  selector: "app-material",
  imports: [
    TitleComponent,
    MatSlideToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
  templateUrl: "./material.component.html",
})
export default class MaterialComponent {
  private _bottomSheetRef = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheetRef.open(OptionsBottomSheetComponent);
  }
}
