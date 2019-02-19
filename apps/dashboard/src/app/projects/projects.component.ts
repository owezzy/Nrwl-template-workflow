import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';
import { el } from '@angular/platform-browser/testing/src/browser_util';

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
    // this.selectedProject = project;
    console.log('SELECT PROJECT', project);
  }

  getProjects() {
    this.projects$ = this.projectService.all();
  }

  saveProject(project) {
    if (!project.id){
      this.createProject(project)
    } else {
      this.updateProject(project)
    }
  }

  createProject(project) {
    this.projectService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  updateProject(project) {
    this.projectService.update(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project) {
    console.log('DELETE PROJECT', project)
    // this.projectService.delete(project.id)
    //   .subscribe(result => this.getProjects());
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject);
  }

  cancel() {
    this.resetProject();
  }
}
