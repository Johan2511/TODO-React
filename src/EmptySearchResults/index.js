import React from 'react';

function EmptySearchResults({ renderFunc, searchText }) {
  return (
    <div>
      {renderFunc(searchText)}
    </div>
  );
}

export { EmptySearchResults };
