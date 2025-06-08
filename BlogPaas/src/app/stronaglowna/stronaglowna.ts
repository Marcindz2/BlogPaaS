import { Component } from '@angular/core';
import { Service1 } from '../service1';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-stronaglowna',
  templateUrl: './stronaglowna.html',
  styleUrls: ['./stronaglowna.css']
})
export class Stronaglowna {
  dane = {
    nazwa: "",
    opis: "",
    zawartosc: ""
  };
  blogi:any[]=[]


constructor(private router: Router,private service1: Service1) {}
  
  ngOnInit(): void {
    this.service1.getData().subscribe({
      next: (response) => {
        this.blogi=response;
      },
      error: (err) => console.error('Błąd pobierania danych:', err)
    });
  }

  przejdzDoSzczegolow(id: number) {
    this.router.navigate(['/blog', id]);
  }
  dodajNowy() {
    this.router.navigate(['add']);
  }

  // utworzBlog() {
  //   this.service1.create(this.dane).subscribe({
  //     next: (response) => {
  //       console.log('Blog utworzony:', response);
  //     },
  //     error: (error) => {
  //       console.error('Błąd podczas tworzenia bloga:', error);
  //     }
  //   });
  // }

  
}