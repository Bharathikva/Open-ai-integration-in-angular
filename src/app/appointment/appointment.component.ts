import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  name!: string;
  email!: string;
  phone!: string;
  date!: string;
  time!: string;
  reason!: string;
  appointments: any[] = [];

  bookAppointment(): void {
    const appointment = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      date: this.date,
      time: this.time,
      reason: this.reason
    };
    this.appointments.push(appointment);
    // console.log(this.appointments);
    window.localStorage.setItem('list',JSON.stringify(this.appointments));
  }

}
