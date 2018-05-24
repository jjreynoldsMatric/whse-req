import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenRequisitionsComponent, NewRequisitionComponent, CompletedRequisitionsComponent, ManageComponent } from './pages';
import { Requisition } from './requisition';

const routes: Routes = [
  { path: '', redirectTo: '/open-requisitions', pathMatch: 'full' },
  { path: 'open-requisitions', component: OpenRequisitionsComponent },
  { path: 'completed-requisitions', component: CompletedRequisitionsComponent },
  { path: 'new-requisition', component: NewRequisitionComponent },
  { path: 'manage', component: ManageComponent}


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
