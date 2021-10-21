import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccHeaderComponent } from './acc-header/acc-header.component';
import { AccFooterComponent } from './acc-footer/acc-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponentComponent } from './upload-component/upload-component.component';
import { ViewBalanceDetailComponent } from './view-balance-detail/view-balance-detail.component';
import { PdftblcompComponent } from './pdftblcomp/pdftblcomp.component';
import { RouterModule, Routes } from '@angular/router';
import { BalsheetComponent } from './pdfrouter/balsheet/balsheet.component';
import { BsarComponent } from './pdfrouter/bsar/bsar.component';
import { IncomestateComponent } from './pdfrouter/incomestate/incomestate.component';
import { IsarComponent } from './pdfrouter/isar/isar.component';
import { ValidaterulComponent } from './pdfrouter/validaterul/validaterul.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { UploadpopupComponent } from './uploadpopup/uploadpopup.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ReviewTblAddRowComponent } from './review-tbl-add-row/review-tbl-add-row.component';
import { ReviewaddrowpopupComponent } from './reviewaddrowpopup/reviewaddrowpopup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BalsheettblService } from './appServices/balsheettbl.service';
import { PdflipdocComponent } from './pdflipdoc/pdflipdoc.component';


const appRoutes:Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'view-balance-detail', component: ViewBalanceDetailComponent,
  children: [
    {path: 'balsheet', component: BalsheetComponent},
    {path: 'bsar', component: BsarComponent},
    {path: 'incomestate', component: IncomestateComponent},
    {path: 'isar', component: IsarComponent},
    {path: 'validaterul', component: ValidaterulComponent},
    {path: '', redirectTo: 'balsheet', pathMatch: 'full' }
  ]},
  
]

@NgModule({
  declarations: [
    AppComponent,
    AccHeaderComponent,
    AccFooterComponent,
    DashboardComponent,
    UploadComponentComponent,
    ViewBalanceDetailComponent,
    PdftblcompComponent,
    BalsheetComponent,
    BsarComponent,
    IncomestateComponent,
    IsarComponent,
    ValidaterulComponent,
    PdftblcompComponent,
    UploadpopupComponent,
    FileuploadComponent,
    ProgressbarComponent,
    ReviewTblAddRowComponent,
    ReviewaddrowpopupComponent,
    PdflipdocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [BalsheettblService],
  bootstrap: [AppComponent]
})
export class AppModule { }
