import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducer';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed-toggler',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './feed-toggler.component.html',
  styleUrl: './feed-toggler.component.scss'
})
export class FeedTogglerComponent {

  constructor(private store: Store) { }

  @Input() tagName?: string;
  currentUser$ = this.store.select(selectCurrentUser);

}
