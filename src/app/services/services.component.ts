import { Component } from '@angular/core';
import { Service } from '../Interfaces/service';
import * as $ from 'jquery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  $ = $;
  services: Service[] = [
    {
      serviceName: 'web design',
      serviceIconClass: 'fa-solid fa-briefcase',
      serviceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni temporaperferendis eum non provident.',
    },
    {
      serviceName: 'web development',
      serviceIconClass: 'fa-solid fa-list-check',
      serviceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni temporaperferendis eum non provident.',
    },
    {
      serviceName: 'photography',
      serviceIconClass: 'fa-solid fa-chart-simple',
      serviceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni temporaperferendis eum non provident.',
    },
    {
      serviceName: 'responsive design',
      serviceIconClass: 'fa-solid fa-binoculars',
      serviceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni temporaperferendis eum non provident.',
    },
    {
      serviceName: 'graphic design',
      serviceIconClass: 'fa-regular fa-sun',
      serviceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni temporaperferendis eum non provident.',
    },
    {
      serviceName: 'marketing services',
      serviceIconClass: 'fa-regular fa-calendar-days',
      serviceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magni temporaperferendis eum non provident.',
    },
  ];
}
