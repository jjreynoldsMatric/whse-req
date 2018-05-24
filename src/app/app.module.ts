import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { OpenRequisitionsComponent } from './open-requisitions/open-requisitions.component';
import { ManageComponent } from './manage/manage.component';
import { IssuePartsComponent } from './issue-parts/issue-parts.component';
import { NewRequisitionComponent } from './new-requisition/new-requisition.component';
import { CompletedRequisitionsComponent } from './completed-requisitions/completed-requisitions.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OpenRequisitionsComponent,
    ManageComponent,
    IssuePartsComponent,
    NewRequisitionComponent,
    CompletedRequisitionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
