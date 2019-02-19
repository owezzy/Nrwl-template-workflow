import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent {
  @Input() project;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();



}
