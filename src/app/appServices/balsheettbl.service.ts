import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalsheettblService {

  balansheetdata:any[];


  constructor () {
    this.balansheetdata = [
      {"checked": true, date: '21/02/2021', descp: 'Venmo D',  cate: 'Debit Card', amt: '44501.74', transType: 'Withdraw' },
      {"checked": false, date: '21/02/2021', descp: 'Starbucks',  cate: 'Credit Card', amt: '44501.74', transType: 'Deposit' },
      {"checked": false, date: '21/02/2021', descp: 'FIRST CIRCLE LEA',  cate: 'Debit Card', amt: '44501.74', transType: 'Online' },
      {"checked": false, date: '21/02/2021', descp: 'Online Banking',  cate: 'Debit Card', amt: '44501.74',  transType: 'Withdraw' },
      {"checked": false, date: '21/02/2021', descp: 'WALGREENS',  cate: 'Credit Card', amt: '44501.74', transType: 'Deposit' },
      {"checked": false, date: '21/02/2021', descp: 'MGH NFS COFFEE CENTRAL',  cate: 'Credit Card', amt: '44501.74',transType: 'Online' },
      {"checked": false, date: '21/02/2021', descp: 'MEMORIAL PTO',  cate: 'Debit Card', amt: '44501.74', transType: 'Withdraw' }
    ]
   }

    
}

