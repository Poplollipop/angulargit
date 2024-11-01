import { Routes } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { SurveyListComponent } from "./pages/survey/surveylist/surveylist.component";
import { SurveypageComponent } from "./pages/survey/surveypage/surveypage.component";
import { SurveyresultComponent } from "./pages/survey/surveyresult/surveyresult.component";
import { SurveycreateComponent } from "./pages/surveyedit/surveycreate/surveycreate.component";
import { SurveyfeedbackComponent } from "./pages/surveyedit/surveyfeedback/surveyfeedback.component";
import { SurveymanageComponent } from "./pages/surveyedit/surveymanage/surveymanage.component";
import { SurveyquizComponent } from "./pages/surveyedit/surveyquiz/surveyquiz.component";
import { SurveystatisticsComponent } from "./pages/surveyedit/surveystatistics/surveystatistics.component";
import { LoginpageComponent } from "./pages/loginpage/loginpage.component";




export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginpageComponent },
    { path: 'surveymanage', component: SurveymanageComponent },
    { path: 'surveystatistics', component: SurveystatisticsComponent },
    { path: 'surveyfeedback', component: SurveyfeedbackComponent },
    { path: 'surveyquiz', component: SurveyquizComponent },
    { path: 'surveycreate', component: SurveycreateComponent },


    { path: 'surveyresult', component: SurveyresultComponent },
    { path: 'surveylist', component: SurveyListComponent },
    { path: 'surveypage', component: SurveypageComponent },


];
