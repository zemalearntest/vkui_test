import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'SplitCol');

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'spaced')
    .forEach((attribute) => {
      const node = attribute.node;
      if (!node.value) {
        j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier('autoSpaced')));
      } else if (
        node.value.type === 'JSXExpressionContainer' &&
        node.value.expression.type === 'BooleanLiteral'
      ) {
        if (node.value.expression.value) {
          j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier('autoSpaced')));
        } else {
          j(attribute).remove();
        }
      }
    });

  return source.toSource();
}
