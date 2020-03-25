import React, { ReactElement } from 'react';
import { Button } from '@swapi/ui-components';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Button type="button" label="Hit da button!"/>
    </div>
  );
};

export default App;
