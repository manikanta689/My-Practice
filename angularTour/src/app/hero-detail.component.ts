import {Component , Input} from "@angular/core";
import { Hero } from "./hero";

@Component({
    selector : 'hero-detail',
    template : ` <div *ngIf="hero">
                <label>id: </label>
                <input [(ngModel)] ="hero.id" placeholder="id">
              </div>
             <div *ngIf="hero">
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"> 
             </div>`,
    styleUrls: ['./app.component.css']
})

export class HeroDetailComponent{
      @Input() hero : Hero;
}