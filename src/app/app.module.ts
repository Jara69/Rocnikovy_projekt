import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlovaComponent } from './rocnik1/slova/slova.component';
import { HlaskyComponent } from './rocnik1/hlasky/hlasky.component';
import { DvojhlaskyHlaskyComponent } from './rocnik1/dvojhlasky-hlasky/dvojhlasky-hlasky.component';
import { SlabikyComponent } from './rocnik1/slabiky/slabiky.component';
import { VelkaMalaComponent } from './rocnik1/velka-mala/velka-mala.component';
import { AbecedaComponent } from './rocnik2/abeceda/abeceda.component';
import { VetyComponent } from './rocnik2/vety/vety.component';
import { SlovniDruhyComponent } from './rocnik2/slovni-druhy/slovni-druhy.component';
import { Slova2Component } from './rocnik2/slova2/slova2.component';
import { SamohlaskySouhlaskyComponent } from './rocnik2/samohlasky-souhlasky/samohlasky-souhlasky.component';
import { PismenoEComponent } from './rocnik2/pismeno-e/pismeno-e.component';
import { SouhlaskyKonecSlovaComponent } from './rocnik2/souhlasky-konec-slova/souhlasky-konec-slova.component';
import { TvarySlovComponent } from './rocnik3/tvary-slov/tvary-slov.component';
import { SouhlaskyStredComponent } from './rocnik3/souhlasky-stred/souhlasky-stred.component';
import { VyjmSlovaComponent } from './rocnik3/vyjm-slova/vyjm-slova.component';
import { PodstJmenaComponent } from './rocnik3/podst-jmena/podst-jmena.component';
import { SlovesaComponent } from './rocnik3/slovesa/slovesa.component';
import { SkladbaSlovaComponent } from './rocnik4/skladba-slova/skladba-slova.component';
import { SlovniDruhy4Component } from './rocnik4/slovni-druhy4/slovni-druhy4.component';
import { PodstJmenaStredComponent } from './rocnik4/podst-jmena-stred/podst-jmena-stred.component';
import { PodstJmenaZenComponent } from './rocnik4/podst-jmena-zen/podst-jmena-zen.component';
import { PodstJmenaMuzComponent } from './rocnik4/podst-jmena-muz/podst-jmena-muz.component';
import { VyznamSlovComponent } from './rocnik5/vyznam-slov/vyznam-slov.component';
import { StavbaSlovaComponent } from './rocnik5/stavba-slova/stavba-slova.component';
import { ZajmenaComponent } from './rocnik5/zajmena/zajmena.component';
import { CislovkyComponent } from './rocnik5/cislovky/cislovky.component';
import { PodmetPrisudekComponent } from './rocnik5/podmet-prisudek/podmet-prisudek.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DoplnPismenDvojComponent } from './rocnik1_log/dopln-pismen-dvoj/dopln-pismen-dvoj.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlovaComponent,
    HlaskyComponent,
    DvojhlaskyHlaskyComponent,
    SlabikyComponent,
    VelkaMalaComponent,
    AbecedaComponent,
    VetyComponent,
    SlovniDruhyComponent,
    Slova2Component,
    SamohlaskySouhlaskyComponent,
    PismenoEComponent,
    SouhlaskyKonecSlovaComponent,
    TvarySlovComponent,
    SouhlaskyStredComponent,
    VyjmSlovaComponent,
    PodstJmenaComponent,
    SlovesaComponent,
    SkladbaSlovaComponent,
    SlovniDruhy4Component,
    PodstJmenaStredComponent,
    PodstJmenaZenComponent,
    PodstJmenaMuzComponent,
    VyznamSlovComponent,
    StavbaSlovaComponent,
    ZajmenaComponent,
    CislovkyComponent,
    PodmetPrisudekComponent,
    RegisterComponent,
    LoginComponent,
    DoplnPismenDvojComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
