

export type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }


export const doReset = (): CounterAction => ({
    type: 'reset'
})
export const doIncreaseBy = (value: number): CounterAction => ({
    type: 'increaseBy',
    payload: { value }

})
//--------------------------------------------------------------------------------------------------------------------------------//

export type CounterActionCalculator =
    | { type: 'Sum', payload: { value: number } }
    | { type: 'Sub', payload: { value: number } }
    | { type: 'Mult', payload: { value: number } }
    | { type: 'Div', payload: { value: number } }

export const doSum = (value: number): CounterActionCalculator => ({
    type: 'Sum',
    payload: { value }

})
export const doSub = (value: number): CounterActionCalculator => ({
    type: 'Sub',
    payload: { value }

})
export const doMult = (value: number): CounterActionCalculator => ({
    type: 'Mult',
    payload: { value }

})
export const doDiv = (value: number): CounterActionCalculator => ({
    type: 'Div',
    payload: { value }

})
