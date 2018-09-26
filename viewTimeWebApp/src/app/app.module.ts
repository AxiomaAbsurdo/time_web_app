import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EntryHoursComponent } from './entry-hours/entry-hours.component';
import { ListHoursComponent } from './list-hours/list-hours.component';
import { UserHelpComponent } from './user-help/user-help.component';
import { DashBoardReportsComponent } from './dash-board-reports/dash-board-reports.component';

const appRoutes: Routes = [ 
                          { path: '', component: EntryHoursComponent },
                          { path: 'ListHoursComponent', component: ListHoursComponent },
                          { path: 'helpForm', component: UserHelpComponent },
                          { path: 'dashBoard', component: DashBoardReportsComponent } ]

@NgModule({
  declarations: [
    AppComponent,
    EntryHoursComponent,
    ListHoursComponent,
    UserHelpComponent,
    DashBoardReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
