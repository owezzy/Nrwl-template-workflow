import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false
    },
    {
      id: '2',
      title: 'Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false
    },
    {
      id: '3',
      title: 'Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true
    }
  ];

  selectedProject;

  constructor() {}

  ngOnInit() {}

  selectProject(project){
    this.selectedProject = project
    console.log('SELECTED PROJECT', project);
  }

  getProjects(){
   this.projects$ = this.projectService.all()
  }

  saveProject(project) {
    console.log('SAVING_PROJECT', project)
  }

  deleteProject(project){
    this.projectService.delete(project.id)
      .subscribe(result => this.getProjects())
  }

  cancel() {
    this.selectProject(null);
  }
}
