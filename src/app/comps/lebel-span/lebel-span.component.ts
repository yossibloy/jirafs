import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lebel-span',
  templateUrl: './lebel-span.component.html',
  styleUrls: ['./lebel-span.component.css']
})
export class LebelSpanComponent implements OnInit {

  constructor() { }

  @Input() lebel:string=""
  @Input() span:string=""
  
  ngOnInit(): void {
  }

}
