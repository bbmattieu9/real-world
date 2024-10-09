import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class BackendErrorMessagesComponent implements OnInit { 
  @Input() backendErrors: BackendErrorsInterface = {};
  errorMessages: Array<string> = [];


  ngOnInit(): void {
      this.errorMessages = Object.keys(this.backendErrors).map((name: string)=> {
        const message = this.backendErrors[name].join(' ');
        return `${ name } ${ message }`
      })
  }
}
