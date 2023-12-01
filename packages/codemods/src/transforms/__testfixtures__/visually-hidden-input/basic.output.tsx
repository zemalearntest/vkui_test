import { VisuallyHidden } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <VisuallyHidden Component="input" />
      <VisuallyHidden Component="input" {...props} keka />
      <VisuallyHidden Component="input" keka="123" />
      <VisuallyHidden Component="input" keka="123">534534</VisuallyHidden>
    </React.Fragment>
  );
};
