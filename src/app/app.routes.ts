import { Routes } from '@angular/router';
import { SurveyListComponent } from './surveylist/surveylist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SurveypageComponent } from './surveypage/surveypage.component';
import { InsidepageComponent } from './insidepage/insidepage.component';
import { ResultpageComponent } from './resultpage/resultpage.component';


export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'surveymange', component:InsidepageComponent },
    { path: 'surveyresult', component:ResultpageComponent },
    { path: 'surveylist', component: SurveyListComponent },
    { path: 'surveypage', component: SurveypageComponent }


];
