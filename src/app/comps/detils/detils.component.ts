import { Component, OnInit, Input } from '@angular/core';
import { jiraff } from '../giraf-parent/giraf-parent.component';

@Component({
  selector: 'app-detils',
  templateUrl: './detils.component.html',
  styleUrls: ['./detils.component.css']
})
export class DetilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() j:jiraff
}
