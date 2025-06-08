import { Component } from '@angular/core';
import { Service1 } from '../service1';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [FormsModule, CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  constructor(private router: Router,private service1: Service1, private route: ActivatedRoute) {}
  blogi:any[]=[]
  id: number |string| null = null;
  
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
  delete(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service1.delete(this.id).subscribe({
      next: (response) => {
        this.blogi=response;
        console.log('usunieto '+this.id)
      },
      error: (err) => console.error('Błąd usuwania danych:', err)
    });
  }
  edytuj() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/blog/edit', this.id]);
  }
}
