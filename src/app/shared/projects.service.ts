import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  projects = [
    {
      id: 1,
      name: 'Photo Locations',
      description: 'A personal project that lets you mark your favourite photo spots on a map.',
      technologies: ['React', 'Express', 'Knex', 'Redux', 'Google Maps API', 'Jest', 'Enzyme'],
      github: 'https://github.com/cornelia-schulz/photolocations',
      website: ' http://www.photolocations.nz',
      image: '../../../assets/images/photolocations-responsive.jpg'
    },
    {
      id: 2,
      name: 'Lost in Translation',
      description: 'A blog about various topics related to Localisation.',
      technologies: ['GatsbyJs', 'React', 'Graphql,', 'Disqus'],
      github: 'https://github.com/cornelia-schulz/lost-in-translation',
      website: 'http://www.cornelia-schulz.net',
      image: '../../../assets/images/lost-in-translation-responsive.jpg'
    },
    {
      id: 3,
      name: 'Frogger',
      description: 'My take on the classic game Frogger.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Canvas', 'OOP'],
      github: 'https://github.com/cornelia-schulz/frogger',
      website: 'http://firzhugh.github.io/frogger/',
      image: '../../../assets/images/frogger-responsive.jpg'
    },
    {
      id: 4,
      name: 'Cornelia Schulz Photography',
      description: 'A portfolio of my photographs.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      github: 'https://github.com/cornelia-schulz/cornelia-schulz-photography',
      website: 'http://www.cornelia-schulz-photography.com',
      image: '../../../assets/images/cornelia-schulz-photography-responsive.jpg'
    }
  ]
}