import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploadpopup',
  templateUrl: './uploadpopup.component.html',
  styleUrls: ['./uploadpopup.component.css']
})
export class UploadpopupComponent implements OnInit {

  workQForm: FormGroup;
  workqTabl: any = []

  constructor(public dialog: MatDialog, private fb:FormBuilder, public dialogRef: MatDialogRef<UploadpopupComponent>) { 
    this.workQForm = this.fb.group({
      'name' : new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  

 // width: string = "30%";
  
 progressWidth= "0%";
 dangerWidth = "0%";
 bgInfoWidth = "0%";
 successWidth = "0%";
 /*popupClose: boolean = false; */

  uploadClick() {
    //console.log('123456789'); 
    
    this.workqTabl.push(this.workQForm.value);

    setTimeout(()=>{ 
      this.progressWidth = "20%";
    }, 500);
    setTimeout(()=>{ 
      this.progressWidth = "40%";
    }, 800);
    setTimeout(()=>{ 
      this.progressWidth = "100%";
    }, 1000);
    setTimeout(()=>{ 
      this.dangerWidth = "50%";
    }, 1200);
    setTimeout(()=>{ 
      this.dangerWidth = "100%";
    }, 1500);
    setTimeout(()=>{ 
      this.bgInfoWidth = "50%";
    }, 2000);
    setTimeout(()=>{ 
      this.bgInfoWidth = "100%";
    }, 2500);
    setTimeout(()=>{ 
      this.successWidth = "50%";
    }, 3000);
    setTimeout(()=>{ 
      this.successWidth = "100%";
    }, 4500);
   /* setTimeout(()=>{ 
      this.popupClose = true;
    }, 2200); */
    setTimeout(()=>{ 
      this.dialogRef.close();
    }, 4000);

  }

}

