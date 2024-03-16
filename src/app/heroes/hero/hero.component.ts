import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  public get capitalizeName() : string {
    return this.name.toUpperCase();
  }


  public getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 25
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45
    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
  }


}
