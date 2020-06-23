import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { jiraff } from '../giraf-parent/giraf-parent.component';

@Component({
  selector: 'giraf-child',
  templateUrl: './giraf-child.component.html',
  styleUrls: ['./giraf-child.component.css']
})
export class GirafChildComponent implements OnInit {

  constructor() { }
  @Input() j:jiraff

  @Output() clickNote = new EventEmitter<null>()
  @Output() deleteNote = new EventEmitter<null>()
  // @Output() rendomColorNote = new EventEmitter<null>()
  @Output() dbclickNote = new EventEmitter<null>()

  ngOnInit(): void {
  //   setTimeout(() => {
  //     this.rendomColorNote.emit()
  //   }, 1000*this.j.id);
   }
}
