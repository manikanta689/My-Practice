//used as router for this angular application.
import { Component } from '@angular/core';

@Component({
    selector : 'app-root',
    template :`<h1>{{title}}</h1>
             <h2> My Heroes</h2>
             <my-heroes><my-heroes>`,
    

})
export class AppComponent{
    title = 'Tour of heroes';
}