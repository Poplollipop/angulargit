import { Routes } from '@angular/router';
import { SurveyListComponent } from './surveylist/surveylist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SurveypageComponent } from './surveypage/surveypage.component';


export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'surveylist', component: SurveyListComponent },
    { path: 'surveypage', component: SurveypageComponent }


];
