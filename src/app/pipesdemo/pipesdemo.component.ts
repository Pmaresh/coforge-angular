import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pipesdemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipesdemo.component.html',
  styleUrl: './pipesdemo.component.css'
})
export class PipesdemoComponent {
  
  title = 'Coforge Tehnologies';  

  todaydate = new Date();  

  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  

  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
}
