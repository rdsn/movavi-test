import React from 'react';
import { getEntityPathFromUrl } from '../utils';

import Card from './Card';
import EntityList from './EntityList';

function Starships() {
  const keyExtractor = (item) => item.url;
  const itemRenderer = (item) => (
    <Card
      item={item}
      titlePropName='name'
      descriptionPropNames={['model', 'manufacturer', 'cost_in_credits']}
      path={getEntityPathFromUrl(item.url, 'starships')}
    />
  );

  return (
    <EntityList
      collectionName='starships'
      keyExtractor={keyExtractor}
      renderItem={itemRenderer}
    />
  );
}

export default Starships;
