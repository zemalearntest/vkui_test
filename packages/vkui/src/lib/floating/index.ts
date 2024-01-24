export {
  useFloating,
  offset as offsetMiddleware,
  flip as flipMiddleware,
  shift as shiftMiddleware,
  autoPlacement as autoPlacementMiddleware,
  arrow as arrowMiddleware,
  size as sizeMiddleware,
  hide as hideMiddleware,
  getOverflowAncestors,
} from '@vkontakte/vkui-floating-ui/react-dom';
export { getAxisLength, getAlignmentAxis } from '@vkontakte/vkui-floating-ui/utils';

export type {
  Placement,
  PlacementWithAuto,
  AutoPlacementType,
  UseFloatingMiddleware,
} from './types';

export {
  checkIsNotAutoPlacement,
  getAutoPlacementAlign,
  convertFloatingDataToReactCSSProperties,
} from './functions';

export { autoUpdateFloatingElement } from './adapters';
