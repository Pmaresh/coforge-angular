import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

    users:any;
    msg: string='';
    //Constructor (private )
    constructor(private myteamservice: TeamService){
      //alert ("Constructor")
    }
    /*.subscribe() is a method on the Observable type. 
    The Observable type is a utility that asynchronously or 
    synchronously streams data to a variety of components */
    ngOnInit(){
      this.msg=this.myteamservice.helloService();
      this.myteamservice.getUser().subscribe(response =>{
        this.users=response;
      });
    }
}
