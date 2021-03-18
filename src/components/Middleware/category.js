import fetch from 'isomorphic-fetch';
//import { handleResponse } from './auth';

export const create = (category, token) => {
    return fetch(`https://adminsparrow.herokuapp.com/category`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
         .then(response => {
        //     handleResponse(response);
             return response.json();
         })
         .catch(err => console.log(err));
};

export const getCategories = () => {
    return fetch(`https://adminsparrow.herokuapp.com/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleCategory = slug => {
    return fetch(`https://adminsparrow.herokuapp.com/category/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeCategory = (slug, token) => {
    return fetch(`https://adminsparrow.herokuapp.com/category/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
         .then(response => {
        //     handleResponse(response);
             return response.json();
         })
         .catch(err => console.log(err));
};
