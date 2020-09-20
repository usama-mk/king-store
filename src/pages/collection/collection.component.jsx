import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
const collectionPage= ({collection})=>{
  const {title, items} = collection;
   return (<div className='collection-page'>
       <h2 className= 'title'>{title}</h2> 
       <div className='items'>
           {
               items.map(item=>(
                   <CollectionItem key={item.id} item={item} />
               ))
           }
       </div>
    </div>);
};

const mapStateToProps= (state, ownProps) => ({
    //selectCollection is a ftn that returns another fuvtion and that other ftn requires "state" to wire everything up together
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(collectionPage);