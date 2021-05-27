import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DvojhlaskyHlaskyComponent} from "./rocnik1/dvojhlasky-hlasky/dvojhlasky-hlasky.component";
import {HlaskyComponent} from "./rocnik1/hlasky/hlasky.component";
import {SlabikyComponent} from "./rocnik1/slabiky/slabiky.component";
import {SlovaComponent} from "./rocnik1/slova/slova.component";
import {VelkaMalaComponent} from "./rocnik1/velka-mala/velka-mala.component";
import {AbecedaComponent} from "./rocnik2/abeceda/abeceda.component";
import {PismenoEComponent} from "./rocnik2/pismeno-e/pismeno-e.component";
import {SamohlaskySouhlaskyComponent} from "./rocnik2/samohlasky-souhlasky/samohlasky-souhlasky.component";
import {Slova2Component} from "./rocnik2/slova2/slova2.component";
import {SlovniDruhy4Component} from "./rocnik4/slovni-druhy4/slovni-druhy4.component";
import {SouhlaskyKonecSlovaComponent} from "./rocnik2/souhlasky-konec-slova/souhlasky-konec-slova.component";
import {VetyComponent} from "./rocnik2/vety/vety.component";
import {PodstJmenaComponent} from "./rocnik3/podst-jmena/podst-jmena.component";
import {SlovesaComponent} from "./rocnik3/slovesa/slovesa.component";
import {SouhlaskyStredComponent} from "./rocnik3/souhlasky-stred/souhlasky-stred.component";
import {TvarySlovComponent} from "./rocnik3/tvary-slov/tvary-slov.component";
import {VyjmSlovaComponent} from "./rocnik3/vyjm-slova/vyjm-slova.component";
import {PodstJmenaMuzComponent} from "./rocnik4/podst-jmena-muz/podst-jmena-muz.component";
import {PodstJmenaStredComponent} from "./rocnik4/podst-jmena-stred/podst-jmena-stred.component";
import {PodstJmenaZenComponent} from "./rocnik4/podst-jmena-zen/podst-jmena-zen.component";
import {SkladbaSlovaComponent} from "./rocnik4/skladba-slova/skladba-slova.component";
import {CislovkyComponent} from "./rocnik5/cislovky/cislovky.component";
import {PodmetPrisudekComponent} from "./rocnik5/podmet-prisudek/podmet-prisudek.component";
import {StavbaSlovaComponent} from "./rocnik5/stavba-slova/stavba-slova.component";
import {VyznamSlovComponent} from "./rocnik5/vyznam-slov/vyznam-slov.component";
import {ZajmenaComponent} from "./rocnik5/zajmena/zajmena.component";
import {SlovniDruhyComponent} from "./rocnik2/slovni-druhy/slovni-druhy.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {DoplnPismenDvojComponent} from './rocnik1_log/dopln-pismen-dvoj/dopln-pismen-dvoj.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dvojhlasky-hlasky', component: DvojhlaskyHlaskyComponent},
  {path: 'hlasky', component: HlaskyComponent},
  {path: 'slabiky', component: SlabikyComponent},
  {path: 'slova', component: SlovaComponent},
  {path: 'velka-mala', component: VelkaMalaComponent},

  {path: 'abeceda', component: AbecedaComponent },
  {path: 'pismeno-e', component: PismenoEComponent},
  {path: 'samohlasky-souhlasky', component: SamohlaskySouhlaskyComponent },
  {path: 'slova2', component: Slova2Component },
  {path: 'slovni-druhy', component: SlovniDruhyComponent },
  {path: 'souhlasky-konec-slova', component: SouhlaskyKonecSlovaComponent },
  {path: 'vety', component: VetyComponent },

  {path: 'podst-jmena', component: PodstJmenaComponent },
  {path: 'slovesa', component: SlovesaComponent },
  {path: 'souhlasky-stred', component: SouhlaskyStredComponent },
  {path: 'tvary-slov', component: TvarySlovComponent },
  {path: 'vyjm-slova', component: VyjmSlovaComponent },

  {path: 'podst-jmena-muz', component: PodstJmenaMuzComponent },
  {path: 'podst-jmena-stred', component: PodstJmenaStredComponent },
  {path: 'podst-jmena-zen', component: PodstJmenaZenComponent },
  {path: 'skladba-slova', component: SkladbaSlovaComponent },
  {path: 'slovni-druhy4', component: SlovniDruhy4Component },

  {path: 'cislovky', component: CislovkyComponent },
  {path: 'podmet-prisudek', component: PodmetPrisudekComponent },
  {path: 'stavba-slova', component: StavbaSlovaComponent },
  {path: 'vyznam-slov', component: VyznamSlovComponent },
  {path: 'zajmena', component: ZajmenaComponent},

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: 'dopln_pismen_dvoj', component: DoplnPismenDvojComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
