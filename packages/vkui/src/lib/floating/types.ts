import type {
  Placement,
  ReferenceType,
  UseFloatingReturn,
} from '@vkontakte/vkui-floating-ui/react-dom';

export type AutoPlacementType = 'auto' | 'auto-start' | 'auto-end';

export type PlacementWithAuto = AutoPlacementType | Placement;

export type {
  UseFloatingOptions,
  ReferenceType,
  ArrowOptions,
  UseFloatingReturn,
  Placement,
  Middleware as UseFloatingMiddleware,
  UseFloatingData,
  Strategy as FloatingPositionStrategy,
} from '@vkontakte/vkui-floating-ui/react-dom';

export type UseFloatingRefs<RT extends ReferenceType = ReferenceType> =
  UseFloatingReturn<RT>['refs'];
