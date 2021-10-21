import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-tbl-add-row',
  templateUrl: './review-tbl-add-row.component.html',
  styleUrls: ['./review-tbl-add-row.component.css']
})
export class ReviewTblAddRowComponent implements OnInit {

  userGroup: FormGroup;

  balasheet: any;

  constructor(private fb:FormBuilder) {
    this.balasheet = [];
    this.userGroup = this.fb.group({
      'descp' : new FormControl('', Validators.required),
      'cate' : new FormControl('', Validators.required),
      'amt' : new FormControl('', Validators.required),
      'transType' : new FormControl('', Validators.required)
    })
   }

   public reviewDataSave(): void {
    this.balasheet.push(this.userGroup.value);
    this.userGroup.reset();
    console.log('11111111111');
  }

   balanceSheetEdit(element:any){
    this.balasheet.forEach((value:any,index:any)=> {
      if(value == element)
      this.balasheet.splice(index,1);
    });
  }

  balanceRmovRow(element:any) {
   this.balasheet.forEach((value:any,index:any)=> {
     if(value == element)
     this.balasheet.splice(index,1);
   });
  }

  reset() {
    this.userGroup.reset();
   }  

  ngOnInit(): void {
  }

}

export class balasheet {}