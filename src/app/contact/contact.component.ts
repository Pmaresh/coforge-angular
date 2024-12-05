import { state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    pname: string ='';
    pemail: string ='';
    pmessage: string ='';
    submittedData: any='';

    constructor(private router:Router){}

    onSubmit() {
      this.submittedData={
        name: this.pname,
        email:this.pemail,
        message: this.pmessage
      };

      //After 10seconds ,navigate to 'details' component along with the submitteddata Object

      setTimeout(()=>{
        this.router.navigate (['/det'], {
          state:{data: this.submittedData},
        });
      },100); //10 seconds
    }
}
