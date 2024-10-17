import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  template: `<div>{{ message }}</div>`,
  styles: ``
})
export class ErrorMessageComponent  implements OnInit{

  @Input() message: string = 'Something went wrong';

  constructor() { }

  ngOnInit(): void {
    
  }


}
