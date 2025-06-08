import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service1 } from '../service1';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  zmiany={
    id:1,
    tytul:"",
    opis:"",
    zawartosc:""
  }
  blogi:any[]=[]
  id: string | null = null;

  constructor(private route: ActivatedRoute, private service1: Service1, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service1.getById(this.id).subscribe({
      next: (response) => {
        this.blogi=response;
        console.log(this.blogi)
      },
      error: (err) => console.error('Błąd pobierania danych:', err)
    });
  }

  zapiszZmiany(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.zmiany.id=id
    this.service1.updateBlog(id, this.zmiany).subscribe({
      next: res => {
        console.log('Zaktualizowano blog:', res);
        this.router.navigate(['/']); 
      },
      error: err => {
        console.error('Błąd aktualizacji:', err);
      }
    });
  }
}
  

