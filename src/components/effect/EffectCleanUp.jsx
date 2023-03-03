import React, { useState } from 'react';
import EffectMouseMove from './EffectMouseMove';

const EffectCleanUp = () => {
  const [display, setDisplsy] = useState(true);

  // after clicking on toggle button mouse event also rendering 
  // that should not be doing that 
  // And that's why we need cleanup function in our useEffect hook
  // ----Changing this in <EffectMouseMove /> -----

  return (
    <div>
      <button onClick={() => setDisplsy(!display)}>Toggle Display</button>
      {display && <EffectMouseMove />}
    </div>
  )
}

export default EffectCleanUp