import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {WeatherCard} from '../pages/ResultsPage/WeatherPoints.js';
storiesOf('WeatherCard', module)
  .add('rainy greensboro', () => (
  <WeatherCard forecast='rainy' city='greensboro' arrivalTime='11:31 AM' position={1} />
  ));
