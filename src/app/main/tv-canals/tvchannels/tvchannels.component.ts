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
      name: 'Первый канал',
      logo: 'assets/images/channels/1st.png',
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
      name: '2x2',
      logo: 'assets/images/channels/2x2.png',
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
      name: 'РБК',
      logo: 'assets/images/channels/rbk.png',
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
      name: 'AMEDIA PREMIUM',
      logo: 'assets/images/channels/amedia.png',
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
      name: 'Netflix1',
      logo: 'assets/images/channels/netflixlogo.png',
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
      name: 'Netflix2',
      logo: 'assets/images/channels/netflixlogo.png',
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
      name: 'Netflix3',
      logo: 'assets/images/channels/netflixlogo.png',
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
      name: 'Netflix4',
      logo: 'assets/images/channels/netflixlogo.png',
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
      name: 'Netflix5',
      logo: 'assets/images/channels/netflixlogo.png',
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
      name: 'Netflix6',
      logo: 'assets/images/channels/netflixlogo.png',
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
