import { createReducer, on } from '@ngrx/store';
import { Article } from 'src/app/interfaces/article';
import { articleAction } from '../actions/article-action';
import { State } from '../interfaces/state';

const initialState:Article = {
    source: {
        id: '',
        name: ''
    },
    author: '',
    title: '',
    description: '',
    publishedAt: {
        _nanoSeconds: 0,
        _seconds: 0
    },
    url: '',
    urlToImage: '',
    content: ''
}

const _articleReducer = createReducer(
    initialState,
    on(articleAction, (state: Article, action) => ({
        ...state,
        ...action.payload
    }))
)

export function articleReducer(state, action) {
    return _articleReducer(state, action)
}