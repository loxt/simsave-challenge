import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { BannerComponent } from './banner/banner.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SubscriberComponent,
    FooterComponent,
    CardsComponent,
    BannerComponent,
  ],
  imports: [CommonModule, MatButtonModule, RouterModule, HttpClientModule],
})
export class HomeModule {}
