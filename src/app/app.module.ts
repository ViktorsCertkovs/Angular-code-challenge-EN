import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { listOfValuesReducer } from './store/list-of-values.reducer';
import { vehicleInfoReducer } from './store/vehicle-info.reducer';
import { VehicleInfoEffects } from './store/vehicle-info.effect';

@NgModule({
  declarations: [
    AppComponent,
    InputSelectComponent,
    InputTextComponent,
    InputErrorComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      listOfValues: listOfValuesReducer,
      vehicleInfo: vehicleInfoReducer,
    }),
    EffectsModule.forRoot([VehicleInfoEffects]),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
