import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UploadpopupComponent } from '../uploadpopup/uploadpopup.component';

@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']
})
export class UploadComponentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // event emiit;
  @Output()
  uploadedFile: boolean = false;
 
  ngOnInit(): void {
  }

  openDialog():void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //this.dialog.open(UploadpopupComponent);
    const dialogRef = this.dialog.open(UploadpopupComponent, {
      width: '75%',
    });
    dialogRef.afterClosed().subscribe(e => {
      //
    });
  }
  //filemedop

}

export class uploadpopup {}