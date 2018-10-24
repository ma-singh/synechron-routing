import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordForm = this.builder.group({
    primaryPassword: ['', [Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern('^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$')
    ]],
    confirmPassword: ['']
  });

  constructor(private builder: FormBuilder) { }

  ngOnInit() {

  }

}
