import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Skill } from '../skill';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  skills: Skill[] = [
    { skillName: 'HTML', skillValue: '85%' },
    { skillName: 'CSS3', skillValue: '75%' },
    { skillName: 'PHP', skillValue: '50%' },
    { skillName: 'JAVASCRIPT', skillValue: '90%' },
  ];
  ngOnInit(): void {}
}
