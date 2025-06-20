import { Component } from '@angular/core';
import { ToggleService } from '../../service/toggle.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  constructor(private toggle: ToggleService) {

  }

  openSidebar() {
    this.toggle.setSidebarState(true);
  }


  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop; // Calculate offset
      window.scroll({
        top: top,
        behavior: 'smooth',
      });
    }
  }

}
