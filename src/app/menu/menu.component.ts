import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  showSubMenu: any = {
    home: false
  };

  toggleSubMenu(menu: string) {
    if (menu === 'home') {
      this.showSubMenu.home = !this.showSubMenu.home;
    }
    // Más menüpontok esetén egyéb logika...
  }
}
