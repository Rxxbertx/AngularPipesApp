import {Component, signal} from '@angular/core';
import {CurrencyPipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-numbers-page',
  imports: [
    DecimalPipe, PercentPipe, CurrencyPipe
  ],
  templateUrl: './numbers-page.html',
  styleUrl: './numbers-page.css'
})
export  default class NumbersPage {

  totalSales = signal(2_345_678.910);
  percent = signal(0.6789);


}
