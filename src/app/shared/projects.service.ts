import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  projects = [
    {
      id: 1,
      name: 'Cornelia Schulz Photography React',
      description: 'A new version of my photography portfolio.',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'React', 'Jest', 'Knex', 'Express'],
      github: 'https://github.com/cornelia-schulz/photography',
      website: 'https://cornelia-photography.herokuapp.com/',
      image: '../../../assets/images/cornelia-schulz-photography-react-responsive.jpg?v=1'
    },
    {
      id: 2,
      name: 'Lost in Translation',
      description: 'A blog about various topics related to Localisation.',
      technologies: ['GatsbyJs', 'React', 'Graphql,', 'Disqus'],
      github: 'https://github.com/cornelia-schulz/lost-in-translation',
      website: 'https://www.lost-in-translation.nz/',
      image: '../../../assets/images/lost-in-translation-responsive.jpg?v=1'
    },
    {
      id: 3,
      name: 'Frogger',
      description: 'My take on the classic game Frogger.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Canvas', 'OOP'],
      github: 'https://github.com/cornelia-schulz/frogger',
      website: 'http://firzhugh.github.io/frogger/',
      image: '../../../assets/images/frogger-responsive.jpg?v=1'
    },
    {
      id: 4,
      name: 'Cornelia Schulz Photography',
      description: 'A portfolio of my photographs.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      github: 'https://github.com/cornelia-schulz/cornelia-schulz-photography',
      website: 'http://www.cornelia-schulz-photography.com',
      image: '../../../assets/images/cornelia-schulz-photography-responsive.jpg?v=1'
    },
    {
      id: 5,
      name: 'Photo Locations',
      description: 'A personal project that lets you mark your favourite photo spots on a map.',
      technologies: ['React', 'Express', 'Knex', 'Redux', 'Google Maps API', 'Jest', 'Enzyme', 'I18next'],
      github: 'https://github.com/cornelia-schulz/photolocations',
      image: '../../../assets/images/photolocations-responsive.jpg?v=1'
    }
  ];
}
