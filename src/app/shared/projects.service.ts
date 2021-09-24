import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  projects = [
    {
      id: 1,
      name: 'Pie Reviews',
      description: 'A personal project to look at yummy pies',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'React', 'Jest', 'React Testing Library', 'Typescript'],
      github: 'https://github.com/cornelia-schulz/pie-review',
      image: '../../../assets/images/pie-review-responsive.jpg?v=1'
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
      name: 'Cornelia Schulz Photography',
      description: 'A new version of my photography portfolio.',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'React', 'Jest', 'Knex', 'Express'],
      github: 'https://github.com/cornelia-schulz/photography',
      website: 'https://cornelia-photography.herokuapp.com/',
      image: '../../../assets/images/cornelia-schulz-photography-react-responsive.jpg?v=1'
    },
    {
      id: 4,
      name: 'Photo Locations',
      description: 'A personal project that lets you mark your favourite photo spots on a map.',
      technologies: ['React', 'Express', 'Knex', 'Redux', 'Google Maps API', 'Jest', 'Enzyme', 'I18next'],
      github: 'https://github.com/cornelia-schulz/photolocations',
      image: '../../../assets/images/photolocations-responsive.jpg?v=1'
    }
  ];
}
