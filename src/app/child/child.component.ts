import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

      /*Component Communication: 
Used @Input to receive data from the parent and 
@Output to emit data to the parent.*/
      @Input() user: any=null;
      

    
}
