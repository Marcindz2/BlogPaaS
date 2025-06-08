import { Component } from '@angular/core';
import { Service1 } from '../service1';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  dane = {
    nazwa: "",
    opis: "",
    zawartosc: ""
  };
  constructor(private router: Router,private service1: Service1) {}

  utworzBlog() {
    this.service1.create(this.dane).subscribe({
      next: (response) => {
        console.log('Blog utworzony:', response);
      },
      error: (error) => {
        console.error('Błąd podczas tworzenia bloga:', error);
      }
    });
  }

}
