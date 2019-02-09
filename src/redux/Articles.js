import * as ActionTypes from './ActionTypes';


export const Articles = (state = { isLoading: true, errMess: null, articles: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ARTICLES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, articles: [] };
        case ActionTypes.ARTICLES_LOADING:
            return { ...state, isLoading: true, errMess: null, articles: [] };
        case ActionTypes.ARTICLES_ADD:
            return { ...state, isLoading: false, errMess: null, articles: action.payload };
        case ActionTypes.ADD_ARTICLE:
            var article = action.payload;
            return {...state, articles: state.articles.concat(article)};
        case ActionTypes.UPDATE_ARTICLE:
            var article = action.payload;
            return {...state, articles: state.articles.map(art => {
                if(art._id === article._id)
                    art = article;
                return art;
            })};
        case ActionTypes.DELETE_ARTICLE:
            var id = action.payload;
            return {...state, articles: state.articles.filter(art => art._id !== id)}
        default:
            return state;
    }
} 