import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Platform } from '../../lib/platform';
import { WriteBarIosIconsPlayground, WriteBarPlayground } from './WriteBar.e2e-playground';

test('WriteBar', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<WriteBarPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});

test.describe('WriteBar', () => {
  test.use({
    onlyForPlatforms: [Platform.IOS],
  });
  // Проверяем, что иконки в iOS не сдвигаются при изменении value
  test('icons', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<WriteBarIosIconsPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
