import { Routes } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { SurveycreateComponent } from "./pages/survey/surveycreate/surveycreate.component";
import { SurveyfeedbackComponent } from "./pages/survey/surveyfeedback/surveyfeedback.component";
import { SurveyListComponent } from "./pages/survey/surveylist/surveylist.component";
import { SurveymanageComponent } from "./pages/survey/surveymanage/surveymanage.component";
import { SurveypageComponent } from "./pages/survey/surveypage/surveypage.component";
import { SurveyquizComponent } from "./pages/survey/surveyquiz/surveyquiz.component";
import { SurveyresultComponent } from "./pages/survey/surveyresult/surveyresult.component";
import { SurveystatisticsComponent } from "./pages/survey/surveystatistics/surveystatistics.component";



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
