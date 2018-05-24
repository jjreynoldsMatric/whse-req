import { Item } from "./item";
import { Employee } from "./employee";

export class Requisition {
    id: number;
    submittedBy: Employee; //EMPLOYEE
    job: number;
    department: number;
    items: Item[];
    dateRequestedOn: number;
}