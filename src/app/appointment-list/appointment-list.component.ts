import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  myData: any[] = [];
  
  constructor() { }

  ngOnInit() {
    const data = localStorage.getItem('list');
    if (data) {
      this.myData = JSON.parse(data);
    }
  }
}
