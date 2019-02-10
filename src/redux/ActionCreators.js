import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const postArticle = (article) => (dispatch) => {
    
    const bearer = 'bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'articles', {
        method: 'POST',
        headers: {
            'Authorization': bearer
        },
        body: article
    })
        .then(response => {
            if (response.ok)
                return response.json();
            else {
                var error = new Error("Error" + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => dispatch(addArticle(response)))
        .catch(error => {
            console.log('post article', error.message);
            alert('Your article could not be posted\nError: ' + error.message);
        })
}

export const putArticle = (id, article) => (dispatch) => {

    const bearer = 'bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'articles/' + id, {
        method: 'PUT',
        headers: {
            'Authorization': bearer
        },
        body: article
    })
        .then(response => {
            if (response.ok){
                return response.json();
            }
            else {
                var error = new Error("Error" + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => dispatch(updateArticle(response)))
        .catch(error => {
            console.log('update article', error.message);
            alert('Your article could not be updated\nError: ' + error.message);
        });
}

export const deleteArticle = (id) => (dispatch) => {
    const bearer = 'bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'articles/' + id, {
        method: 'DELETE',
        headers: {
            'Authorization': bearer
        },
    })
        .then(response => {
            if (response.ok){
                return response.json();
            }
            else {
                var error = new Error("Error" + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => dispatch(delArticle(id)))
        .catch(error => {
            console.log('delete article', error.message);
            alert('Your article could not be deleted\nError: ' + error.message);
        });
}

export const fetchArticles = () => (dispatch) => {

    dispatch(articlesLoading());

    return fetch(baseUrl + 'articles')
        .then(response => {
            if (response.ok)
                return response;
            else {
                var error = new Error("Error " + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .then(response => dispatch(articlesAdd(response)))
        .catch(error => dispatch(articlesFailed(error.message)))
}

export const updateArticle = (article) => {
    return {
        type: ActionTypes.UPDATE_ARTICLE,
        payload: article
    }
}

export const delArticle = (id) => {
    return {
        type: ActionTypes.DELETE_ARTICLE,
        payload: id
    }
}

export const addArticle = (article) => {
    return {
        type: ActionTypes.ADD_ARTICLE,
        payload: article
    }
};

export const articlesAdd = (articles) => {
    return {
        type: ActionTypes.ARTICLES_ADD,
        payload: articles
    }
};


export const articlesFailed = (err) => {
    return {
        type: ActionTypes.ARTICLES_FAILED,
        payload: err
    }
};

export const articlesLoading = () => {
    return {
        type: ActionTypes.ARTICLES_LOADING
    }
};