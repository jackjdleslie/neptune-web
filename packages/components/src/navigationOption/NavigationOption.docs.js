import React from 'react';

import OptionDocs from '../common/Option/OptionDocs';
import { NavigationOption } from '..';

const NavigationOptionDocs = () => (
  <OptionDocs
    type="navigation"
    Option={NavigationOption}
    name="NavigationOption"
    callbackName="onClick"
    callback={() => {
      alert('Navigated!'); // eslint-disable-line no-alert
    }}
    callbackString="this.handleClick"
    title="Navigation option"
    content="Watch me as I navigate (hahahaha)!"
  />
);

export default NavigationOptionDocs;
