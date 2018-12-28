
import { combineReducers } from 'redux';

const itemReducer = () => {
    return [
        {name: 'men1', price: '51'},
        {name: 'men2', price: '102'}
    ];
};
 const selectedItemReducer  = (selectedItem =null, action) =>  {
    if (action.type === 'ITEM_SELECTED') {
        return action.payload;
    }
    return selectedItem;
 };

 export default combineReducers ({
     items: itemReducer ,
     selectedItem: selectedItemReducer

 });