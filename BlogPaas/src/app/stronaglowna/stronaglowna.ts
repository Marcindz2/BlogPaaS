import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1';

@Component({
  selector: 'app-stronaglowna',
  templateUrl: './stronaglowna.component.html',
  styleUrls: ['./stronaglowna.component.css']
})
export class stronaglowna implements OnInit {
  dane: any[] = [];

  constructor(private service1: Service1) {}

  ngOnInit(): void {
    this.service1.getData().subscribe(response => {
      this.dane = response;
    });
  }
}