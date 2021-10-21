import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BalsheettblService } from '../appServices/balsheettbl.service';

@Component({
  selector: 'app-reviewaddrowpopup',
  templateUrl: './reviewaddrowpopup.component.html',
  styleUrls: ['./reviewaddrowpopup.component.css']
})
export class ReviewaddrowpopupComponent implements OnInit {
  
  userGroup: FormGroup;

  balasheet: any;

  //category:any;
  
  constructor(private _balsheetService:BalsheettblService, private fb:FormBuilder) {
    this.balasheet = [];
    this.userGroup = this.fb.group({
      'descp' : new FormControl('', Validators.required),
      'amt' : new FormControl('', Validators.required),
      'cate' : new FormControl('', Validators.required),      
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

   category = [
    {id:1, name: "Account Receivable"},
    {id:2, name:"Ask my Accountant"},
    {id:2, name:"Salary Payable"},
    {id:2, name:"Commission Payable"},
    {id:2, name:"Merchant Charges"},
    {id:1, name: "Payroll liabilites"},
    {id:2, name:"Electric"},
    {id:2, name:"Office Supplies"},
    {id:2, name:"Professional Fees"},
    {id:2, name:"Cable Expense"},
    {id:1, name: "Marketing Adverising"},
    {id:2, name:"Insurance"},
    {id:2, name:"Bank Service Charge"}
  ]

  transType = [
    {id:1, name: "Deposit"},
    {id:2, name:"Transfer"},
    {id:2, name:"Check"}
  ]

   ngOnInit() {
   }

}
