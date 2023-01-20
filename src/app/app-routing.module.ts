import { GroupsAddComponent } from './pages/groups-add/groups-add.component';
import { HrComponent } from './pages/hr/hr.component';
import { EmployeesAddComponent } from './pages/employees-add/employees-add.component'; 
import { TeacherAddComponent } from './pages/teacher-add/teacher-add.component'; 
import { ClassRoomsComponent } from './pages/class-rooms/class-rooms.component';
import { HolidayComponent } from './pages/holiday/holiday.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { EleveAddComponent } from './pages/eleve-add/eleve-add.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { UsersHomeComponent } from './pages/users-home/users-home.component';
import { EleveComponent } from './pages/eleve/eleve.component'; 
import { TraductionComponent } from './pages/traduction/traduction.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElevesComponent } from './pages/eleves/eleves.component';
import { CoursComponent } from './pages/cours/cours.component';
import { GroupsComponent } from './pages/groups/groups.component';

const routes: Routes = [
  {path: "",component: HomeComponent },
  {path: "translate",component: TraductionComponent },
  
  
  // Users routes
  {path: "hr",component: HrComponent , children:[
    {path:"",component:UsersHomeComponent},
    {path:"eleves",component:ElevesComponent},
     {path:"eleves/add",component:EleveAddComponent},
    {path:"teachers",component:TeachersComponent},
    {path:"teachers/add",component:TeacherAddComponent},
     {path:"employees",component:EmployeesComponent},
    {path:"employees/add",component:EmployeesAddComponent},
     {path:"holiday",component: HolidayComponent },
    {path:"classrooms",component: ClassRoomsComponent },
    
  ]},

  // Academy

  { path:"academy",component:AcademyComponent , children:[
    {path:"cours", component: CoursComponent},
    {path:"groups", component: GroupsComponent},
    {path:"groups/add", component: GroupsAddComponent}
    
  ]},

  {path:"hr/eleves/:id",component:EleveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
