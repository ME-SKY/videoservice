import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tv-channels',
  templateUrl: './tvchannels.component.html',
  styleUrls: ['./tvchannels.component.scss']
})
export class TVChannelsComponent implements OnInit {


  channels = [
    {
      id: 1,
      name: 'SomeChannel1',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    },
    {
      id: 2,
      name: 'SomeProgram',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    },
    {
      id: 3,
      name: 'SomeProgram',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    },
    {
      id: 4,
      name: 'SomeProgram',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    },
    {
      id: 5,
      name: 'SomeProgram',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    },
    {
      id: 6,
      name: 'SomeProgram',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    },
    {
      id: 7,
      name: 'SomeProgram',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    },
    {
      id: 8,
      name: 'SomeProgram',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    },
    {
      id: 9,
      name: 'SomeProgram',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    },
    {
      id: 10,
      name: 'SomeProgram',
      logo: 'some-logo-url',
      programs: [
        {
          id: 1,
          time: '13:00',
          name: 'SomeProgram1'
        },
        {
          id: 2,
          time: '14:00',
          name: 'SomeProgram2'
        },
        {
          id: 3,
          time: '15:00',
          name: 'SomeProgram3'
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
