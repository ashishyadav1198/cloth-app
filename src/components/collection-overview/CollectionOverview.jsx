import React from "react";
import {connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import { selectShopCollections } from "../../redux/shop/shop.selectors";

function CollectionOverview({ collections}) {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections,
})

export default connect(mapStateToProps)(CollectionOverview)