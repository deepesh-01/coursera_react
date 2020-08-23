import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) =>({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) =>  (dispatch) => {
    const newComment = {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
    }
     newComment.date = new Date().toISOString();

     return fetch(baseUrl + 'comments',{
         method:'POST',
         body: JSON.stringify(newComment),
         headers:{
             'Content-Type' : 'application/json'
         },
         credential: 'same-origin'
     })
     .then(respose => {
        if (respose.ok){
            return respose;
        }
        else{
            var error = new Error('Error ' + respose.status + ':' + respose.statusText);
            error.respose = respose;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(respose => respose.json())
    .then(respose => dispatch(addComment(respose)))
    .catch(error => {console.log('Post Comments', error.message)
                    alert('Your Comment Could not be posted\nError: '+ error.message)})
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    return fetch(baseUrl + 'dishes')
        .then(respose => {
            if (respose.ok){
                return respose;
            }
            else{
                var error = new Error('Error ' + respose.status + ':' + respose.statusText);
                error.respose = respose;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(respose => respose.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
} 

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess 
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(respose => {
        if (respose.ok){
            return respose;
        }
        else{
            var error = new Error('Error ' + respose.status + ':' + respose.statusText);
            error.respose = respose;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(respose => respose.json() )
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
} 

export const commentsFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess 
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
    .then(respose => {
        if (respose.ok){
            return respose;
        }
        else{
            var error = new Error('Error ' + respose.status + ':' + respose.statusText);
            error.respose = respose;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(respose => respose.json() )
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
} 

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess 
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());
    return fetch(baseUrl + 'leaders')
        .then(respose => {
            if (respose.ok){
                return respose;
            }
            else{
                var error = new Error('Error ' + respose.status + ':' + respose.statusText);
                error.respose = respose;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(respose => respose.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess 
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const addFeedback = (feedback) =>({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const postFeedback = (id,firstname,lastname,telnum,email,message) =>  (dispatch) => {
    const newFeedback = {
            id : id,
            firstname: firstname,
            lastname: lastname,
            telnum: telnum,
            email: email,
            message:message,
    }
     newFeedback.date = new Date().toISOString();

     return fetch(baseUrl + 'feedback',{
         method:'POST',
         body: JSON.stringify(newFeedback),
         headers:{
             'Content-Type' : 'application/json'
         },
         credential: 'same-origin'
     })
     .then(respose => {
        if (respose.ok){
            return respose;
        }
        else{
            var error = new Error('Error ' + respose.status + ':' + respose.statusText);
            error.respose = respose;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(respose => respose.json())
    .then(respose => dispatch(addFeedback(respose)))
    .catch(error => {console.log('Post Feedback', error.message)
                    alert('Your feedback Could not be posted\nError: '+ error.message)})
}