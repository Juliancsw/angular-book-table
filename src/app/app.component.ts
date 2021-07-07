import {Component, OnInit} from "@angular/core";
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class BookComponent implements OnInit {
  title = 'daimler-assignment';
  books: any[];

  constructor(){
    this.books = [
      {
      'id':1,
      'title':'Learning C#: A Practival Approach (Volume 2)',
      'author': 'bruce e. scurter',
      'borrowers': 
        [
          {
            'name':'john doe',
            'borrowedDate':'2017-12-22',
            'returnedDate':'2018-01-19'
           },
           {
            'name':'greg stuart',
            'borrowedDate':'2018-02-25',
            'returnedDate':null
           }
        ]
      },
      {
      'id':2,
      'title':'Python: For Beginners: A Crash Course Guide to Learn Python in 1 Week',
      'author': 'timothy c. needham',
      'borrowers': 
        [
           {
            'name':'philip stans',
            'borrowedDate':'2016-09-12',
            'returnedDate':'2016-09-30'
           },
           {
            'name':'chris vons',
            'borrowedDate':'2018-04-01',
            'returnedDate':'2018-04-02'
           },
           {
            'name':'keith jones',
            'borrowedDate':'2018-08-01',
            'returnedDate':'2018-04-02'
           }
        ]
      }
    ];

    for(let i=0; i<this.books.length; i++){
      this.books[i].buttonPressed = false;
    }
  }

  ngOnInit(){
    //do something
  }
}
