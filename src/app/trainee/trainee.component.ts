import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-trainee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './trainee.component.html',
  styleUrl: './trainee.component.css'
})
export class TraineeComponent {
  powers = ['Smart Coder', 'Super Flexible',  
    'Logical Thinker', 'Excellent Analyst'];  
    
    
    //inokes class constructor
    emp = new Employee(18, '', '', '');
  
  submitted = false;  
  onSubmit() { this.submitted = true; }  
  
}
