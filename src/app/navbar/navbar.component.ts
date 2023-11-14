import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    // From down to up fadeIn
    $('#dropdownMenuBtn, #dropdownMenu').hover(
      function () {
        $(this).find('#dropdownMenu').css('display', 'block');
      },
      function () {
        $(this).find('#dropdownMenu').css('display', 'none');
      }
    );

    // From display none to display block
    /*$('#dropdownMenuBtn').mouseenter(() => {
      $('#dropdownMenu').css('display', 'block');
    });
    $('#dropdownMenuBtn').mouseleave(() => {
      $('#dropdownMenu').css('display', 'none');
    });*/
  }
  // ngOnInit(): void {
  //   $('#dropdownMenuBtn').hover(
  //     function () {
  //       $(this).find('#dropdownMenu').css('display', 'block');
  //     },
  //     function () {
  //       $(this).find('#dropdownMenu').css('display', 'none');
  //     }
  //   );
  // }
}
