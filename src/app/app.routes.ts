import { Routes } from '@angular/router';
import { SurveyListComponent } from './surveylist/surveylist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SurveypageComponent } from './surveypage/surveypage.component';
import { SurveymanageComponent } from './surveymanage/surveymanage.component';
import { SurveyresultComponent } from './surveyresult/surveyresult.component';
import { SurveycreateComponent } from './surveycreate/surveycreate.component';
import { SurveyquizComponent } from './surveyquiz/surveyquiz.component';
import { SurveyfeedbackComponent } from './surveyfeedback/surveyfeedback.component';
import { SurveystatisticsComponent } from './surveystatistics/surveystatistics.component';



export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'surveymanage', component: SurveymanageComponent },
    { path: 'surveystatistics', component: SurveystatisticsComponent },
    { path: 'surveyfeedback', component: SurveyfeedbackComponent },
    { path: 'surveyquiz', component: SurveyquizComponent },
    { path: 'surveycreate', component: SurveycreateComponent },


    { path: 'surveyresult', component: SurveyresultComponent },
    { path: 'surveylist', component: SurveyListComponent },
    { path: 'surveypage', component: SurveypageComponent },


];
