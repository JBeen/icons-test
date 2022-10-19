import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuTestComponent } from './menu-test/menu-test.component';
import { ICONS, TYPES } from './consts';

@NgModule({
  declarations: [AppComponent, MenuTestComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private readonly _domSanitizer: DomSanitizer,
    private readonly _matIconRegistry: MatIconRegistry
  ) {
    const icons = ICONS;
    const types = TYPES;
    icons.forEach(({ icon: iconName }) => {
      types.forEach((iconType) => {
        const name = iconName + iconType;
        const icon = require(`!!raw-loader?{esModule:false}!../assets/icons/${name}.svg`);
        const iconLiteral = this._domSanitizer.bypassSecurityTrustHtml(icon);
        this._matIconRegistry.addSvgIconLiteral(name, iconLiteral);
      });
    });
  }
}
