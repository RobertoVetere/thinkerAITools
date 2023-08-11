import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavsComponent } from '../../base/navs/navs.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}

@NgModule({
  declarations: [
    
    // ... otros componentes aquí si es necesario
  ],
  // Otros metadatos del módulo aquí
})
export class HomeModule {
}
