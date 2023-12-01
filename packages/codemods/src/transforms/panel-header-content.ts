import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'PanelHeader');

  const elements = source.find(j.JSXOpeningElement).filter((path) => {
    if (path.value.name.type === 'JSXMemberExpression') {
      const property = path.value.name;
      console.log(property);
      if (
        property.object.type === 'JSXIdentifier' &&
        property.object.name === localName &&
        property.property.name === 'Content'
      ) {
        return true;
      }
    }
    return false;
  });

  if (elements.size() > 0) {
    api.report(`: <PanelHeader.Content> is no longer available. Manual changes required.`);
  }

  return source.toSource();
}
