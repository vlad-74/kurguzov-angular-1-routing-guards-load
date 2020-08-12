import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

import { GuardsComponent } from './components/guards/guards.component';
import { MainComponent } from './components/main/main.component';
import { HelloResolver } from './guards/hello-resolver';
import { HelloGuard } from './guards/activate.guard';
import { ExitHelloGuard } from './guards/exit-hello.guard';

import { CustomPreloadService } from './modules/preload/custom-preload.service';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'guards',
    component: GuardsComponent,
    canActivate: [HelloGuard],
    canDeactivate: [ExitHelloGuard],
    resolve: { caunter: HelloResolver}
  },
  { path: 'children', loadChildren: () => import('./modules/children/children.module').then(m => m.ChildrenModule) },
  { path: 'lazy', loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule) },
  { path: 'preload', loadChildren: () => import('./modules/preload/preload.module').then(m => m.PreloadModule), data: { preload: true }  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      preloadingStrategy: CustomPreloadService
    })
  ],
  declarations: [
    AppComponent,
    GuardsComponent,
    MainComponent
  ],
  bootstrap: [AppComponent],
  providers: [HelloResolver, HelloGuard, ExitHelloGuard]
})
export class AppModule { }
