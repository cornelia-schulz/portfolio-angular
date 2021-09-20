import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blurb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blurb.component.html',
  styleUrls: ['./blurb.component.css']
})
export class BlurbComponent implements OnInit {

  quote = 'The best preparation for tomorrow is doing your best today.';
  author = 'H. Jackson Brown, Jr.';

  constructor() { }

  ngOnInit() {
  }

}
