import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'ModalPageHeader');

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .forEach((element) => {
      const attributes = element.value.attributes;

      if (attributes) {
        const getRefIndex = attributes.findIndex(
          (attribute) => attribute.type === 'JSXAttribute' && attribute.name.name === 'getRef',
        );
        const getRootRefIndex = attributes.findIndex(
          (attribute) => attribute.type === 'JSXAttribute' && attribute.name.name === 'getRootRef',
        );

        if (getRefIndex !== -1 && getRootRefIndex === -1) {
          const attribute = attributes[getRefIndex];
          if (attribute.type === 'JSXAttribute') {
            attribute.name.name = 'getRootRef';
          }
        }

        if (getRootRefIndex !== -1 && getRefIndex !== -1) {
          attributes.splice(getRefIndex, 1);
        }
      }
    });

  return source.toSource();
}
