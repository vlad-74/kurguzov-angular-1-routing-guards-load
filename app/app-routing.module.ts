import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main.component';
import { HelloComponent } from './components/hello/hello.component';

import { HelloResolver } from './guards/hello-resolver';
import { HelloGuard } from './guards/activate.guard';
import { ExitHelloGuard } from './guards/exit-hello.guard';

import { CustomPreloadService } from "./modules/preload/custom-preload.service";


const routes: Routes = [
  { path: "main", pathMatch: "full", component: MainComponent },
  { path: 'hello', 
    component: HelloComponent, 
    canActivate: [HelloGuard], 
    canDeactivate: [ExitHelloGuard], 
    resolve: { caunter: HelloResolver}
  },
  {
    path: 'children',
    loadChildren: () => import('./modules/children/children.module').then(m => m.ChildrenModule)
  },
  { 
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'preload', 
    loadChildren: () => import('./modules/preload/preload.module').then(m => m.PreloadModule),
    data: { preload: true } 
  },
   {
    path: '',
    pathMatch: 'full',
    redirectTo: '/children'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      preloadingStrategy: CustomPreloadService
    })
  ],
  exports: [RouterModule],
  declarations: [MainComponent, HelloComponent],
  providers: [HelloResolver, HelloGuard, ExitHelloGuard],
})
// export class AppRoutingModule {}
