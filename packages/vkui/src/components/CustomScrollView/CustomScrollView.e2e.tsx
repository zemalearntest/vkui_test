import { test } from '@vkui-e2e/test';
import {
  FallbackCustomScrollViewWithBothScrollsPlayground,
  FallbackCustomScrollViewWithVerticalPlayground,
  NativeCustomScrollViewWithBothScrollsPlayground,
} from './CustomScrollView.e2e-playground';

test.describe('CustomScrollView', () => {
  test.describe('useFallback=true', () => {
    test.use({ onlyForPlatforms: ['vkcom'] });

    test('with vertical scroll', async ({
      mount,
      expectScreenshotClippedToContent,
      componentPlaygroundProps,
    }) => {
      await mount(<FallbackCustomScrollViewWithVerticalPlayground {...componentPlaygroundProps} />);
      await expectScreenshotClippedToContent();
    });

    test('with vertical and horizontal scroll', async ({
      mount,
      expectScreenshotClippedToContent,
      componentPlaygroundProps,
    }) => {
      await mount(
        <FallbackCustomScrollViewWithBothScrollsPlayground {...componentPlaygroundProps} />,
      );
      await expectScreenshotClippedToContent();
    });
  });

  test('useFallback=false', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<NativeCustomScrollViewWithBothScrollsPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
