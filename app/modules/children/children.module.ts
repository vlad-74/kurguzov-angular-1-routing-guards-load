import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChildrenComponent } from './children.component';
import { VideoComponent } from './video/video.component';
import { AudioComponent } from './audio/audio.component';


const itemRoutes: Routes = [
  { path: 'video',  component: VideoComponent },
  { path: 'audio',  component: AudioComponent }
];
const routes: Routes = [{ path: '', component: ChildrenComponent, children: itemRoutes }];

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChildrenComponent, VideoComponent,AudioComponent],
  providers: [],
  exports: [RouterModule]
})

export class ChildrenModule { }
