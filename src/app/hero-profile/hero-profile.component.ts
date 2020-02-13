import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfile implements OnInit {
  lifetimeAchievements: string;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.lifetimeAchievements = 'Some text to copy';
  }

  copyAchievements() {
    const pending = this.clipboard.beginCopy(this.lifetimeAchievements);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    setTimeout(attempt);
  }
}
