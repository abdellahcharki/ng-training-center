 
import { UsersService } from 'src/app/services/users.service';
 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TraductionComponent } from './pages/traduction/traduction.component';
import { BodyComponent } from './components/body/body.component'; 
import { EleveComponent } from './pages/eleve/eleve.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ElevesComponent } from './pages/eleves/eleves.component';
import { UsersHomeComponent } from './pages/users-home/users-home.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { EleveAddComponent } from './pages/eleve-add/eleve-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AcademyComponent } from './pages/academy/academy.component';
import { CoursComponent } from './pages/cours/cours.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { HolidayComponent } from './pages/holiday/holiday.component';
import { ClassRoomsComponent } from './pages/class-rooms/class-rooms.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { TeacherAddComponent } from './pages/teacher-add/teacher-add.component'; 
import { EmployeesAddComponent } from './pages/employees-add/employees-add.component';
import { HrComponent } from './pages/hr/hr.component';
import { GroupsAddComponent } from './pages/groups-add/groups-add.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NoDataComponent } from './components/no-data/no-data.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TraductionComponent,
    BodyComponent,
    EleveComponent,
    EmployeesComponent,
    ElevesComponent,
    UsersHomeComponent,
    TeachersComponent,
    EleveAddComponent,
    AcademyComponent,
    CoursComponent,
    GroupsComponent,
    HolidayComponent,
    ClassRoomsComponent,
    PaginationComponent, 
    TeacherAddComponent, 
    EmployeesAddComponent,
    HrComponent,
    GroupsAddComponent,
    NoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule ,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
