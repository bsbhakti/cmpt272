import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {

  }
 
}
