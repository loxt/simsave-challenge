import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { BehaviorSubject } from 'rxjs';

interface Card {
  color: string;
  text: string;
  title: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['../../../sass/components/home/cards.scss'],
})
export class CardsComponent implements OnInit {
  private readonly _cards = new BehaviorSubject<Card[]>([]);
  readonly cards = this._cards.asObservable();

  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getCards().subscribe((data) => {
      this._cards.next(data.products);
    });
  }
}
