import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
 
  employeeId:number=101;
  employeeName:string="Rahul";
  employeeAge:number=30;
 
  title="Employee Details - Data Binding using various Directives"
 
  isManager: boolean = true;
 
  //Array
  skills: string[] = ['JavaScript', 'Angular', 'TypeScript'];
 
  //Enum
  Position: PositionType = PositionType.SeniorDeveloper;
 
  //Object
  address: { street: string, city: string,postalCode: number} = {
    street: '123 Main st',
    city: 'New York',
    postalCode: 10001
  };
 
  //Any (can be any type)
  extraInfo: any = 'Additional employee info';
 
  //Event Binding - handling method
  message: string = '';
 
  //Two-way data binding
  employeePosition: string = 'Software Engineer';
 
  //Event Binding Method
  hello():void{
    this.message="Hello from Event Binding in Angular by - "+this.employeeName;
  }
  clear():void{
    this.message = '';
  }
  toggleManagerStatus():void{
    this.isManager = !this.isManager;
  }
  //Property Binding - One Way Binding
  username:string='James Gosling';
  info:string="Property Binding - One Way";
 
  updateUserName(){
    this.username='John Doe';
  }
 
  convertToDate() {
    const date=new Date();
    return date.toLocaleDateString();
  }
 
  add():number{
    return 10+200;
  }
}
 
 
// Enum for Position Type
enum PositionType{
    JuniorDeveloper,
    SeniorDeveloper,
    TeamLead
}
