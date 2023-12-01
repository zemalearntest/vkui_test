import { ActionSheet, ActionSheetItem } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <ActionSheet>
        <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
        <ActionSheetItem autoCloseDisabled>Закрепить запись</ActionSheetItem>
        <ActionSheetItem>Закрепить запись</ActionSheetItem>
      </ActionSheet>
    </React.Fragment>
  );
};
