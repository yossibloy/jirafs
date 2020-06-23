import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'giraf-parent',
  templateUrl: './giraf-parent.component.html',
  styleUrls: ['./giraf-parent.component.css']
})
export class GirafParentComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  rendColor:string
  selectedg: jiraff

  deletefn(gid:number): void {
    for (let i = 0; i < this.jiraffArray.length; i++) {
      if (gid==this.jiraffArray[i].id){
        this.jiraffArray.splice(i,1)
        this.selectedg =null
      }
    }
  }




  jiraffArray: jiraff[] = [
    { id: 1, name: "avi", height: 2.3, color: "blue", isBossy: false },
    { id: 2, name: "verda", height: 2.7, color: "red", isBossy: true },
    { id: 3, name: "shuki", height: 5.3, color: "green", isBossy: false },
    { id: 4, name: "franko", height: 7.5, color: "blue", isBossy: false },
    { id: 5, name: "gil", height: 4.8, color: "red", isBossy: false },
    { id: 6, name: "iva", height: 1.2, color: "green", isBossy: true },
    { id: 7, name: "yoyo", height: 8.3, color: "brown", isBossy: false },
    { id: 8, name: "brak", height: 5.6, color: "crimson", isBossy: false },
    { id: 9, name: "fred", height: 7.2, color: "blue", isBossy: false },
    { id: 10, name: "nana", height: 6.0, color: "brown", isBossy: true }
  ]
}





export class jiraff {
  id: number
  name: string
  height: number
  color: string
  isBossy: boolean
} 