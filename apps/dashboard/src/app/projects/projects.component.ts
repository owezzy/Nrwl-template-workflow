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


  constructor(private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project) {
    this.selectedProject = project;
    console.log('SELECTED PROJECT', project);
  }

  getProjects() {
    this.projects$ = this.projectService.all();
  }

  saveProject(project) {
    console.log('SAVING_PROJECT', project);
  }

  deleteProject(project) {
    this.projectService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject)
  }

  cancel() {
    this.resetProject();
  }
}
