import { Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { DataService, Mucca } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private dataService: DataService) { }

  mucche: Mucca[] = [];
  errorMessage: string | undefined;
  
  ngOnInit(): void {

    console.log( this.dataService.getMucche().subscribe((data: {}) => {
      return data;
    })
    );
      
  }
}