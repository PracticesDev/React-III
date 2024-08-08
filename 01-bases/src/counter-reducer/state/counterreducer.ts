import { CounterAction } from "../action";
import { CounterState } from "../interface";

 
 
 
 export const counterReducer = (state: CounterState, action: CounterAction): CounterState => { // TS :CounterState => quiere decir valor de retorno de la funcion
    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        case 'increaseBy':
            return {

                counter: state.counter + action.payload.value,
                previous: state.counter,
                changes: state.changes +1,
            }

        default:
            return state;
    }

}