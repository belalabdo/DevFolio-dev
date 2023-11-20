import { Component, OnInit } from '@angular/core';
import { Work } from '../Interfaces/work';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  works: Work[] = [
    {
      name: 'Lorem impsum dolor',
      img: '../../assets/work-1.jpg',
      workAlt: 'ipad-coffee',
      category: 'web design',
      date: '18 Sep. 2018',
    },
    {
      name: 'Loreda Cuno Nere',
      img: '../../assets/work-2.jpg',
      workAlt: 'disc-white',
      category: 'web design',
      date: '18 Sep. 2018',
    },
    {
      name: 'Mavrito Lana Dere',
      img: '../../assets/work-3.jpg',
      workAlt: 'disc working time-management',
      category: 'web design',
      date: '18 Sep. 2018',
    },
    {
      name: 'Bindo Laro Cado',
      img: '../../assets/work-4.jpg',
      workAlt: 'laptop coffee',
      category: 'web design',
      date: '18 Sep. 2018',
    },
    {
      name: 'Studio Lena Mado',
      img: '../../assets/work-5.jpg',
      workAlt: 'disc working design',
      category: 'web design',
      date: '18 Sep. 2018',
    },
    {
      name: 'Studio Big Bang',
      img: '../../assets/work-6.jpg',
      workAlt: 'disc book books design phone',
      category: 'web design',
      date: '18 Sep. 2017',
    },
  ];
  currentWorkSlide: number = 0;

  ngOnInit(): void {
    let tempThis = this;
    $(document).keydown(function (eventInfo) {
      switch (eventInfo.originalEvent?.key) {
        case 'Escape':
          tempThis.exitSlider();
          break;
        case 'ArrowLeft':
          tempThis.slide(-1);
          break;
        case 'ArrowRight':
          tempThis.slide(1);
          break;
      }
    });
  }
  enterSlider(imgId: number) {
    $('.portfolio-carousel').css({ display: 'block' });
    $('.portfolio-carousel').animate({ opacity: 1 }, 400);
    $('.portfolio-carousel .preview img').animate(
      {
        maxWidth: '100%',
      },
      550
    );
    $('body').css({ overflow: 'hidden' });
    this.currentWorkSlide = imgId;
  }
  exitSlider() {
    $('.portfolio-carousel .preview img').animate(
      {
        maxWidth: '10%',
      },
      400
    );
    $('.portfolio-carousel').animate({ opacity: 0 }, 400, function () {
      $('.portfolio-carousel').css({ display: 'none' });
    });
    $('body').css({ overflow: 'visible' });
  }
  slide(imgId: number) {
    let tempThis = this;

    if (this.currentWorkSlide == 0 && imgId < 0) {
      $('.portfolio-carousel .preview > .d-flex').animate(
        { opacity: 0 },
        300,
        function () {
          tempThis.currentWorkSlide = 5;
        }
      );
      $('.portfolio-carousel .preview > .d-flex').animate({ opacity: 1 }, 300);
      return;
    } else if (this.currentWorkSlide == 5 && imgId > 0) {
      $('.portfolio-carousel .preview > .d-flex').animate(
        { opacity: 0 },
        300,
        function () {
          tempThis.currentWorkSlide = 0;
        }
      );
      $('.portfolio-carousel .preview > .d-flex').animate({ opacity: 1 }, 300);
      return;
    }

    $('.portfolio-carousel .preview > .d-flex').animate(
      { opacity: 0 },
      300,
      function () {
        tempThis.currentWorkSlide += imgId;
      }
    );
    $('.portfolio-carousel .preview > .d-flex').animate({ opacity: 1 }, 300);
  }
}
