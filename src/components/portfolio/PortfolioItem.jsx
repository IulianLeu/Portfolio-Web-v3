import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';


/*Example of array in this case*/
/*
  export const nameOfArray = [{id:1}, {id:2}, {id:3},]
*/
export const items = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Website',
    github: 'https://github.com/IulianLeu?tab=repositories',
    demo: 'https://fierce-oasis-93253.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Empty Item',
    github: '#portfolio',
    demo: '#portfolio'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Empty Item',
    github: '#portfolio',
    demo: '#portfolio'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Empty Item',
    github: '#portfolio',
    demo: '#portfolio'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Empty Item',
    github: '#portfolio',
    demo: '#portfolio'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Empty Item',
    github: '#portfolio',
    demo: '#portfolio'
  },
]

export default {
  items,
}
