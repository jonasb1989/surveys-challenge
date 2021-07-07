import Identity from 'components/Identity';
import Details from 'components/Details';
import Favorites from 'components/Favorites';
import Summary from 'components/Summary';
import Presentation from 'components/Presentation';

export const steps = [
  {
    id: 0,
    title: 'Presentation',
    component: Presentation,
  },
  {
    id: 1,
    title: 'Identity',
    component: Identity,
  },
  {
    id: 2,
    title: 'Details',
    component: Details,
  },
  {
    id: 3,
    title: 'Favorites',
    component: Favorites,
  },
  {
    id: 4,
    title: 'Summary',
    component: Summary,
  },
];
