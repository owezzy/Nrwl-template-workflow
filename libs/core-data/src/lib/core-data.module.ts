import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '@workshop/core-data';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [ProjectsService]
})
export class CoreDataModule {}
