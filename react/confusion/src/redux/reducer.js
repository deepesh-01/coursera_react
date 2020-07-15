import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotion';


export const initalState = {
    dishes: DISHES,
    comments : COMMENTS,
    leader:LEADERS,
    promotions:PROMOTIONS
};

export const Reducer = (state = initalState, action) => {
    return state;
}