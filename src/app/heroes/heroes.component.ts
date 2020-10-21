import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../share/mock-heroes';
import {HeroService} from '../share/hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void{
   this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);
  }

  addName(name: string): void{
    name = name.trim();
    if (!name){return; }
    this.heroService.addHero({name} as Hero).subscribe(hero => {this.heroes.push(hero);
    });
  }

  deleteName(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

