import React from 'react';
import { getEntityPathFromUrl } from '../utils';

import Card from './Card';
import EntityList from './EntityList';

function People() {
  const keyExtractor = (item) => item.url;
  const itemRenderer = (item) => (
    <Card
      item={item}
      titlePropName='name'
      descriptionPropNames={['height', 'mass', 'gender']}
      path={getEntityPathFromUrl(item.url, 'people')}
    />
  );

  return (
    <EntityList
      collectionName='people'
      keyExtractor={keyExtractor}
      renderItem={itemRenderer}
    />
  );
}

export default People;
