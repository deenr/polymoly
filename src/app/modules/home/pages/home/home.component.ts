import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isSelectingDeck = true;

  public scrollToDecks() {
    document.getElementById('card-decks')?.scrollIntoView({ behavior: 'smooth' });
  }

  public scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  public selectDeck(): void {
    this.isSelectingDeck = false;
  }

  public returnToDeck(): void {
    this.isSelectingDeck = true;
  }
}
