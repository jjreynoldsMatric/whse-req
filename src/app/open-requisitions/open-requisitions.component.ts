import { Component, OnInit, Input } from '@angular/core';
import { Requisition } from '../requisition';
import { Employee } from '../employee';
import { Item } from '../item';
import { ItemLocation } from '../locations';
import { ReasonCode } from '../reason-code';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-open-requisitions',
  templateUrl: './open-requisitions.component.html',
  styleUrls: ['./open-requisitions.component.css']
})
export class OpenRequisitionsComponent implements OnInit {

  requisitions: Requisition[] = [];
  employee: Employee;
  items: Item[];
  locations: ItemLocation[] =[];
  today: number;
  reasonCode: ReasonCode;


  constructor() {
    this.reasonCode = {
      code: "AOS",
      description: "Office Supplies Expense",
      whseAction: "Misc Issue"
    };
    this.today = Date.now();
    this.locations[0] = {
      item: 123-4567,
      rank: 2,
      location: "FLOOR",
      qtyOnHand: 10
    }
    this.items = [
      {
      matricPN: "123-4567",
      quantityRequested: 1,
      quantityFilled: 0,
      lotNum: 1,
      reasonCode: this.reasonCode,
      locations: this.locations
    }, {
      matricPN: "987-6543",
      quantityRequested: 1,
      quantityFilled: 0,
      lotNum: 1,
      reasonCode: this.reasonCode,
      locations: this.locations
    }];
    this.employee = {
      empNum:1483,
      fname: "Josh",
      lname: "Reynolds",
      department: 616
    };
    this.requisitions[0] = {id:4, submittedBy: this.employee , job:2, department:616  ,items: this.items, dateRequestedOn: this.today}
   }

  ngOnInit() {
  }

  manage(req: Requisition) {
    
  }

}
