import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


/* import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReviewaddrowpopupComponent } from 'src/app/reviewaddrowpopup/reviewaddrowpopup.component'; 
import { BalsheettblService } from 'src/app/appServices/balsheettbl.service'; */

@Component({
  selector: 'app-balsheet',
  templateUrl: './balsheet.component.html',
  styleUrls: ['./balsheet.component.css'],
 /* providers: [BalsheettblService] */
})
export class BalsheetComponent implements OnInit {

  /* balasheet: any[] = []; */
  
  /* constructor(private dialog: MatDialog, private _balsheetService:BalsheettblService) { }; */

  adduserForm: FormGroup;
  transCateSelect = null;
  transTypeSelect = null;
  public user = {isEdit: false};
  
 
  constructor(private fb:FormBuilder) {
    //this.balasheet = [];
    this.adduserForm = this.fb.group({
      'trnsDate' : new FormControl('', Validators.required),
      'descp' : new FormControl('', Validators.required),
      'amt' : new FormControl('', Validators.required),
      'cate' : new FormControl('', Validators.required),      
      'transType' : new FormControl('', Validators.required)
    })
    trnsDate:[new Date()]
   }

  /* openAddRowDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //this.dialog.open(ReviewaddrowpopupComponent);
    const dialogRef = this.dialog.open(ReviewaddrowpopupComponent, {
      width: '30%',
    });
  } */

  balasheet: any[] = [
    {"checked": false, trnsDate: '21/02/2021', descp: 'VENMO DES:PAYMENT ID:XXXXX08863259 INDN:VIMI - CO ID:XXXXX81992 WEB',  cate: 'Debit Card', amt: '-160', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'VENMO DES:PAYMENT ID:XXXXX18169085 INDN:VIMI - CO ID:XXXXX81992 WEB',  cate: 'Credit Card', amt: '-103', transType: 'Deposit' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'STARBUCKS 800-782-7282 06/15 PURCHASE 800-782-7282 WA',  cate: 'Debit Card', amt: '-25', transType: 'Online' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'MGH NFS COFFEE CENTRAL 06/15 MOBILE PURCHASE BOSTON MA',  cate: 'Debit Card', amt: '-4.8',  transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'MGH NFS EAT STREET CAFE 06/15 MOBILE PURCHASE BOSTON MA',  cate: 'Credit Card', amt: '-6.95', transType: 'Deposit' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'MGH NFS COFFEE CENTRAL 06/15 MOBILE PURCHASE BOSTON MA',  cate: 'Credit Card', amt: '-3.2',transType: 'Online' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'PARKING-MUSEUM OF SCI 06/15 PURCHASE BOSTON MA',  cate: 'Debit Card', amt: '-15', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'WALGREENS #1851 06/16 MOBILE PURCHASE NATICK MA',  cate: 'Debit Card', amt: '-67.72', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'Zelle Transfer Conf# tg7x55dlc; WESLEY',  cate: 'Debit Card', amt: '-250', transType: 'Withdraw' },    {"checked": false, trnsDate: '21/02/2021', descp: 'name',  cate: 'Debit Card', amt: '111111', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'KEEP THE CHANGE TRANSFER TO ACCT 7405 FOR 06/17/21',  cate: 'Debit Card', amt: '-1.33', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: '8020CREATIVE 06/17 PURCHASE LOS ANGELES CA',  cate: 'Debit Card', amt: '-82.12', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'JANIE AND JACK 06/18 PURCHASE NATICK MA',  cate: 'Debit Card', amt: '-194.49', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'JANIE AND JACK 06/18 PURCHASE NATICK MA',  cate: 'Debit Card', amt: '-400', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'FIRST CIRCLE LEA DES:7818635251 ID:93314523 INDN:Vimi ra CO ID:XXXXX59040 PPD',  cate: 'Debit Card', amt: '-228', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'KEEP THE CHANGE TRANSFER TO ACCT 7405 FOR 06/18/21',  cate: 'Debit Card', amt: '-1.39', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'MEMORIAL PTO 06/18 PURCHASE HTTPSWWW.MEMO MA',  cate: 'Debit Card', amt: '-30', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'AUNTIE ANNES MA106 06/18 MOBILE PURCHASE NATICK MA',  cate: 'Debit Card', amt: '-7.58', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'TST* TOUS LES JOURS BAK 06/18 MOBILE PURCHASE NATICK MA',  cate: 'Debit Card', amt: '-28.31', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'TARGET 00013086 06/18 MOBILE PURCHASE FRAMINGHAM MA',  cate: 'Debit Card', amt: '-4.44', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'TARGET.COM * 06/19 PURCHASE 800-591-3869 MN',  cate: 'Debit Card', amt: '-38.17', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'Online Banking Transfer Conf# u6gf3la4g; Kantubuktha',  cate: 'Debit Card', amt: '-2075', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'TARGET.COM * 06/19 PURCHASE 800-591-3869 MN',  cate: 'Debit Card', amt: '-5.73', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'UBER EATS 06/19 PURCHASE HELP.UBER.COM CA',  cate: 'Debit Card', amt: '-239.76', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'UBER EATS 06/19 PURCHASE HELP.UBER.COM CA',  cate: 'Debit Card', amt: '-23.82', transType: 'Withdraw' },
    {"checked": false, trnsDate: '21/02/2021', descp: 'BJS INSTACART 06/20 PURCHASE HTTPSINSTACAR CA',  cate: 'Debit Card', amt: '-75.57', transType: 'Withdraw' },

  ];

  public openAddRowDialog():void {
    this.balasheet.push(this.adduserForm.value);
    this.adduserForm.reset();
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

  tablEdit(element:any) {
    element.isEdit = true;
    // this.user.isEdit = true;
    //this.initiCompany();
  }
  closeEdit(element:any) {
    element.isEdit = false;
    // this.user.isEdit = false;
  }
  saveEdit(element:any) {
    element.isEdit = false;
    // this.user.isEdit = false;
  }

  ngOnInit(): void {
    /*this.balasheet = this._balsheetService.balansheetdata; */
   /* this.adduserForm = new FormGroup({
      'trnsDate': new FormControl((new Date()).toISOString().substring (0,10)),
    }) */
  }

  trnsCategory: any[] = [
    {id:1, name: "Account Receivable"},
    {id:2, name:"Ask my Accountant"},
    {id:3, name:"Salary Payable"},
    {id:4, name:"Commission Payable"},
    {id:5, name:"Merchant Charges"},
    {id:6, name: "Payroll liabilites"},
    {id:7, name:"Electric"},
    {id:8, name:"Office Supplies"},
    {id:9, name:"Professional Fees"},
    {id:10, name:"Cable Expense"},
    {id:11, name: "Marketing Adverising"},
    {id:12, name:"Insurance"},
    {id:13, name:"Bank Service Charge"}
  ]

  transDropdownData: any[] = [
    {id:1, name: "Deposit"},
    {id:2, name:"Transfer"},
    {id:3, name:"Check"}
  ]

}

/* export class reviewaddrowpopup {} */
