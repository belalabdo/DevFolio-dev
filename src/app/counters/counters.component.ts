import { Component, OnInit } from '@angular/core';
import { Counter } from '../Interfaces/counter';
import { CountUpOptions } from '../Interfaces/count-up-options';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
})
export class CountersComponent {
  counters: Counter[] = [
    {
      name: 'works completed',
      class: 'fa-solid fa-check fs-3',
      value: 450,
    },
    {
      name: 'years of experience',
      class: 'fa-solid fa-newspaper fs-3',
      value: 25,
    },
    {
      name: 'total clients',
      class: 'fa-solid fa-user-group fs-3',
      value: 550,
    },
    {
      name: 'award won',
      class: 'fa-solid fa-award fs-3',
      value: 48,
    },
  ];
  options: CountUpOptions = {
    enableScrollSpy: true,
    scrollSpyOnce: true,
    duration: 1.5,
  };
}
