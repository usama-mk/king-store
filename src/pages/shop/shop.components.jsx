import React from 'react';
import CollectionsOverview from '../../components/preview-collection/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import collectionPage from '../collection/collection.component';

const ShopPage = ({match}) => {

 return  ( 
 <div className='shop-page'>
   <Route exact path={`${match.path}`} component= {CollectionsOverview}/>
<Route path={`${match.path}/:collectionId`} component={collectionPage} />
    </div>);
};


export default ShopPage;