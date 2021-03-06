import { QUEUE_FIGHTER, SETUP, STAGE_FIGHTERS } from '../actions/types'

const initialState = {
    fighters: [],
    cards: [],
    queue: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state
        case SETUP:
            return {
                ...state,
                cards: action.payload.cards,
                fighters: action.payload.fighters
            }
        case QUEUE_FIGHTER:
            return {
                ...state,
                cards: state.cards.map((card, index) => {
                if(card.index === action.payload) {
                    return {
                    ...card, 
                    active: !card.active
                    }
                }
                return card
                }), 
                fighters: state.fighters
            }
            /*
        case STAGE_FIGHTERS:
            return {
                ...state,
                cards: action.payload.cards,
                fighters: action.payload.fighters,
            }
            */
    }
}