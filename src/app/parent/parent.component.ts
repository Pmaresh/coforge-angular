import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', avatar: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', avatar: 'https://via.placeholder.com/80' }
  ];

  selectedUser: any = null;

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
