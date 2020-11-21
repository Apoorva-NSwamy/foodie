import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './routes/home/home.component';
import { DetailsComponent } from './routes/details/details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import { IframeDialogComponent } from './components/iframe-dialog/iframe-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    IframeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDialogModule
  ],
  entryComponents: [IframeDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
