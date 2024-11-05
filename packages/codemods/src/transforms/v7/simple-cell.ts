import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameProp } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'SimpleCell', alias);

  if (localName) {
    renameProp(j, source, localName, {
      expandable: 'chevron',
      subhead: 'overTitle',
    });
  }

  return source.toSource();
}
