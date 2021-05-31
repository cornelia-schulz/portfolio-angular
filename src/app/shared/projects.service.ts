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
    },
    {
      id: 6,
      name: 'Where in the world',
      description: 'A coding challenge from Frontend Mentor.',
      technologies: ['HTML', 'CSS', 'VueJs', 'Axios', 'SCSS'],
      github: 'https://github.com/cornelia-schulz/fm-rest-countries-api-with-color-theme-switcher',
      website: 'https://frosty-albattani-ec5ec1.netlify.app/',
      image: '../../../assets/images/where-in-the-world-responsive.jpg?v=1'
    },
    {
      id: 7,
      name: 'URL Shortening',
      description: 'A coding challenge from Frontend Mentor.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Axios', 'Typescript'],
      github: 'https://github.com/cornelia-schulz/fm-url-shortening-api',
      website: 'https://objective-einstein-222a85.netlify.app/',
      image: '../../../assets/images/url-shortening-responsive.jpg?v=1'
    },
    {
      id: 8,
      name: 'Pricing Component',
      description: 'A coding challenge from Frontend Mentor.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/cornelia-schulz/fm-pricing-component-with-toggle',
      website: 'https://cornelia-schulz.github.io/fm-pricing-component-with-toggle/',
      image: '../../../assets/images/pricing-component-responsive.jpg?v=1'
    }
  ];
}
