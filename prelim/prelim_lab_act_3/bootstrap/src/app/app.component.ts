import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeaturedSectionComponent, FooterComponent, HeaderComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstrap';
}