import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      console.log('Contact Form:', this.contact);
      this.submitted = true;
      this.contact = { name: '', email: '', message: '' };
      setTimeout(() => (this.submitted = false), 5000);
    }
  }
}
