import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroDetailComponent } from './hero-detail.component';

import { HeroComponent } from './hero.component';

import { FormsModule }   from '@angular/forms';

import { HeroService } from './hero.service';

import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path : 'heroes',
      component : HeroComponent
    }])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
