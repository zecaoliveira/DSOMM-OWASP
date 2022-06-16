import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './component/main-content/main-content.component';
import { MatrixComponent } from './component/matrix/matrix.component';
import { TaskDescriptionComponent } from './component/task-description/task-description.component';

const routes: Routes = [
  {path: '',component: MainContentComponent},
  {path: 'matrix', component: MatrixComponent},
  {path: 'task-description', component: TaskDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }