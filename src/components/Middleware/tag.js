import fetch from 'isomorphic-fetch';
//import { handleResponse } from './auth';

export const create = (tag, token) => {
    return fetch(`https://adminsparrow.herokuapp.com/tag`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(tag)
    })
        .then(response => {
  //          handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getTags = () => {
    return fetch(`https://adminsparrow.herokuapp.com/tags`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleTag = slug => {
    return fetch(`https://adminsparrow.herokuapp.com/tag/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeTag = (slug, token) => {
    return fetch(`https://adminsparrow.herokuapp.com/tag/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
    //        handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};
