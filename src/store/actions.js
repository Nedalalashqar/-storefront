import superagent from 'superagent';

const apiProds = 'https://appstore-a.herokuapp.com/products';
const apiCats = 'https://appstore-a.herokuapp.com/categories';

export const getRemoteData =  (activeCategory) => (dispatch) => {
    console.log('activeCategory-----------------',activeCategory);
   superagent.get(apiProds).then(dataProds => {
       superagent.get(apiCats).then(dataCat => {
            return dispatch(getAction({ products: dataProds.body, 
                categories: dataCat.body,
                 activeCategory: activeCategory }))
        });
    });
}







export const removeItem = (item) => {
    return {
        type: "remove",
        payload: item
    }
}







export const addItem = (item) => {
    
    return {
        type: "add",
        payload: item
    }
}







export const changeActiveCategory = (activeCategory) => (dispatch) => {
    return dispatch(getActiveCategory(activeCategory))
}


const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}


const getActiveCategory = payload => {
    return {
        type: "activeCategory",
        payload: payload
    }
}

export const putAction = payload => {
    return {
        type: 'PUT',
        payload: payload
    }
}
