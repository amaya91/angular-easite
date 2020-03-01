import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  animations: [
    trigger('enterLeave', [
      transition('void => *', [
        style({
          opacity: 0.2,
          transform: 'translateX(-100vw)'
        }),
        animate('1000ms ease-in',
          style({
            opacity: 1,
            transform: 'scale(1.2)'
          })
        )
      ]),
    ]),
    trigger('enterRight', [
      transition('void => *', [
        style({
          opacity: 0.2,
          transform: 'translateX(200vw)'
        }),
        animate('1000ms ease-in',
          style({
            opacity: 1,
            transform: 'scale(1.2)'
          })
        )
      ]),
    ]),
    // trigger('selected', [
    //   state('selected',
    //     style({
    //       backgroundColor: 'whitesmoke',
    //       transform: 'scale(1.2)',
    //     })
    //   ),
    //   transition('selected <=> *', [
    //     animate('300ms ease-in')
    //   ]),
    // ])
  ]
})
export class MediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
