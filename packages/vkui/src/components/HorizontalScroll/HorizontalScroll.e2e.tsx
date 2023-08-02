import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import {
  HorizontalScrollMobilePlayground,
  HorizontalScrollSmallTabletPlayground,
  HorizontalScrollWithHasMousePlayground,
  HorizontalScrollWithoutHasMousePlayground,
} from './HorizontalScroll.e2e-playground';

test.describe('HorizontalScroll', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      hasPointer: true,
    },
    onlyForPlatforms: [Platform.ANDROID],
  });
  test('ViewWidth.SMALL_TABLET hasPointer=true', async ({
    mount,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<HorizontalScrollSmallTabletPlayground {...componentPlaygroundProps} />);
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});

test.describe('HorizontalScroll', () => {
  test.use({
    onlyForPlatforms: [Platform.ANDROID],
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
      hasPointer: false,
    },
  });
  test('ViewWidth.MOBILE hasPointer=false', async ({
    mount,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<HorizontalScrollMobilePlayground {...componentPlaygroundProps} />);
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});

test.describe('HorizontalScroll', () => {
  const DATA_TESTID = 'horizontal-scroll';
  const CUSTOM_ROOT_SELECTOR = `[data-testid="${DATA_TESTID}"]`;

  test('has arrows on mouse hover', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(
      <HorizontalScrollWithHasMousePlayground
        {...componentPlaygroundProps}
        data-testid={DATA_TESTID}
      />,
    );

    await page.hover(CUSTOM_ROOT_SELECTOR);

    await Promise.all([
      expectScreenshotClippedToContent({
        cropToContentSelector: CUSTOM_ROOT_SELECTOR,
      }),
      expectA11yScanResults(),
    ]).catch((error) => console.error(error));
  });

  test('does not have arrows without mouse', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(
      <HorizontalScrollWithoutHasMousePlayground
        {...componentPlaygroundProps}
        data-testid={DATA_TESTID}
      />,
    );

    await page.hover(CUSTOM_ROOT_SELECTOR);

    await Promise.all([
      expectScreenshotClippedToContent({
        cropToContentSelector: CUSTOM_ROOT_SELECTOR,
      }),
      expectA11yScanResults(),
    ]).catch((error) => console.error(error));
  });
});
