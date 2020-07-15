import React from 'react';
import { getEntityPathFromUrl } from '../utils';

import Card from './Card';
import EntityList from './EntityList';

function Films() {
  const keyExtractor = (item) => item.url;
  const itemRenderer = (item) => (
    <Card
      item={item}
      titlePropName='title'
      descriptionPropNames={['episode_id', 'director', 'producer']}
      path={getEntityPathFromUrl(item.url, 'films')}
    />
  );

  return (
    <EntityList
      collectionName='films'
      keyExtractor={keyExtractor}
      renderItem={itemRenderer}
    />
  );
}

export default Films;
