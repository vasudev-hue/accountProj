import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // uploadedFile: any;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  uploadedFile(event:any){
    console.log(event);

  }

  showBalanCompo():void {
    //alert('123');
    this._router.navigateByUrl('/view-balance-detail');
  }

  workqTabl: any = [
    {name: 'ILO006-WEST-6900B-HB_PSHIP_LIB-#1113083-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'JL001-CAMB-9102B-HB_PSHIP_LIB-#1111220--CY2021 Q2', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Auto Extraction Completed', lastmodidate: '20 May 2018'},
    {name: 'DG017-SOUV-7300B-HB_PSHIP_LIB-#1111753-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'RH003-WILL-9100B-HB_PSHIP_LIB-#1105018-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Failed', lastmodidate: '20 May 2018'},
    {name: 'RH003-WILL-9100B-HB_PSHIP_LIB-#1105018-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'DG013-PAL2-7900B-HB_PSHIP_LIB-#1111742-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'UB001-THES-4300B-HB_PSHIP_LIB-#1111553-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'KP001-RIVE-4300B-HB_PSHIP_LIB-#1111525-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'WP007-DEER-7760B-HB_PSHIP_LIB-#1111780-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'GE024-RIVE-8510B-HB_PSHIP_LIB-#1116001-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'BN111-WHI4-9500B-HB_PSHIP_LIB-#1115156-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'HV051-LAMP-9100B-HB_PSHIP_LIB-#1108747-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'HY004-PAR2-3200B-HB_PSHIP_LIB-#1109760-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'BN110-BAD1-5000B-HB_PSHIP_LIB-#1112641-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'},
    {name: 'LO005-WILL-6812B-HB_PSHIP_LIB-#1107741-v1-CY2021 Q', type: 'Private', accno: '245789234512', dateRec: '20 May 2018', dateproc: '20 May 2018', qastatus: 'Q/A Started', lastmodidate: '20 May 2018'}
  ]

}
