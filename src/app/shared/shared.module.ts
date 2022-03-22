import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    ContentComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AsideComponent,
    ContentComponent
  ]
})
export class SharedModule { }
