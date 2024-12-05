import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

    data:any=null;

    constructor(private router:Router){

      const navigation=this.router.getCurrentNavigation();
      /*getCurrentNavigation() on the Router service, which retrieves the 
    current navigation details, including any extra data passed during routing.*/
    
     /*
The navigation object contains extras, and extras can contain a state object where you 
can pass arbitrary data between routes.
This line uses optional chaining (?.) to safely access extras, state, 
and then the data property within state. This ensures that if any part of the 
chain (navigation, extras, or state) is null or undefined, the entire expression 
evaluates as undefined instead of throwing an error.

The || operator ensures that if the data is undefined or falsy, null will be assigned 
to this.data. This provides a fallback in case the navigation state doesn't contain 
the expected data.*/
      this.data=navigation?.extras?.state?.['data'] || null;
    }


}
