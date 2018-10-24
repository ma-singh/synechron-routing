import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public users: Array<Object> = [
    {
      "firstName": "John",
      "middleName": "Fitzgerald",
      "lastName": "Kennedy",
      "email": "jfk@usa.gov",
      "phone": "123-456-7890",
      "companyName": "U.S. Government",
      "city": "Washington, D.C.",
      "state":"D.C.",
      "feinID": 35,
      "owner": false
    },
    {
      "firstName": "Martin",
      "middleName": "Luther",
      "lastName": "King",
      "email": "mlk@freedom.org",
      "phone": "890-765-4321",
      "companyName": "Civil Rights Movement",
      "city": "Atlanta",
      "state": "GA",
      "feinID": 39,
      "owner": false
    },
    {
      "firstName": "Malcolm",
      "middleName": "X",
      "lastName": "Little",
      "email": "malcolmx@nationofislam.org",
      "phone": "456-123-9078",
      "companyName": "Muslim Mosque, Inc.",
      "city": "New York City",
      "state": "NY",
      "feinID": 39,
      "owner": true
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }

}
