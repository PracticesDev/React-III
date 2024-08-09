import { CounterActionCalculator } from "../actions/action"
import { CounterCalculator } from "../interfaces/interface"


const counterReducerCalculator = (state: CounterCalculator, action: CounterActionCalculator): CounterCalculator => {

    switch (action.type) {
        case 'Sum':
            return {
                counterSum: state.counterSum + action.payload.value,
                counterSub: state.counterSub,
                counterMult: state.counterMult,
                counterDiv: state.counterDiv,
            }
        case 'Sub':
            return {
                counterSum: state.counterSum,
                counterSub: state.counterSub - action.payload.value,
                counterMult: state.counterMult,
                counterDiv: state.counterDiv,
            }
        case 'Mult':
            return {
                counterSum: state.counterSum,
                counterSub: state.counterSub,
                counterMult: state.counterMult * action.payload.value,
                counterDiv: state.counterDiv,
            }
        case 'Div':
            return {
                counterSum: state.counterSum,
                counterSub: state.counterSub,
                counterMult: state.counterMult,
                counterDiv: state.counterDiv / action.payload.value,
            }
        default:
            return state;
    }

}

export default counterReducerCalculator
