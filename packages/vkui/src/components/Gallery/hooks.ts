import * as React from 'react';
import { useTimeout } from '../../hooks/useTimeout';
import { useDOM } from '../../lib/dom';

export function useAutoPlay(timeout: number, slideIndex: number, callbackFn: VoidFunction) {
  const { clear: clearAutoPlay, set: setAutoPlay } = useTimeout(callbackFn, timeout);
  const { window } = useDOM();

  React.useEffect(
    () => (timeout ? setAutoPlay() : clearAutoPlay()),
    [timeout, slideIndex, clearAutoPlay, setAutoPlay],
  );

  // Отключаем прокрутку слайдов при неактивной вкладке
  React.useEffect(
    function preventSlideChange() {
      if (!window || !timeout) {
        return;
      }

      const changeAutoPlay = () => {
        clearAutoPlay();

        window.addEventListener(
          'focus',
          () => {
            clearAutoPlay();
            setAutoPlay();
          },
          {
            once: true,
          },
        );
      };

      window.addEventListener('blur', changeAutoPlay);

      return () => {
        window.removeEventListener('blur', changeAutoPlay);
      };
    },
    [window, timeout, clearAutoPlay, setAutoPlay],
  );
}
