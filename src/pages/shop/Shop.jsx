import React from "react";
import {Route} from 'react-router-dom'
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import CollectionPage from '../collection/CollectionPage'

const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
        {
          console.log('shop ',match.path)
        }
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
