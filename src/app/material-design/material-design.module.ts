import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFileUploadModule } from "angular-material-fileupload";

const materialModules = [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFileUploadModule
  ];

  @NgModule({
    imports: [
      CommonModule,
      ...materialModules
    ],
    exports: [
      ...materialModules
    ],
  })
  

export class MaterialDesignModule { }