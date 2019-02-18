import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.getProjects()
  }

  selectProject(project){
    this.selectedProject = project;
    console.log('SELECTED PROJECT', project);
  }

  getProjects(){
   this.projects$ = this.projectService.all()
  }

  deleteProject(project){
    this.projectService.delete(project.id)
      .subscribe(result => this.getProjects())
  }

  cancel() {
    this.selectProject(null);
  }
}
