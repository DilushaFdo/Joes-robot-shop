import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { Test1Component } from "./test1/test1.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent, CatalogComponent, SiteHeaderComponent, Test1Component]
})
export class AppComponent {
  
}
