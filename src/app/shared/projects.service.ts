import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  projects = [
    {
      id: 1,
      name: 'Photo Locations',
      technologies: ['React', 'Express', 'Knex', 'Redux', 'Google Maps API', 'Jest', 'Enzyme'],
      github: '',
      website: ''
    },
    {
      id: 2,
      name: 'Lost in Translation',
      technologies: [],
      github: '',
      website: ''
    },
    {
      id: 3,
      name: 'Frogger',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Canvas', 'OOP'],
      github: '',
      website: ''
    },
    {
      id: 4,
      name: 'Cornelia Schulz Photography',
      technologies: [],
      github: '',
      website: ''
    }
  ]
}