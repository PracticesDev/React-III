
export interface CounterState {
    counter: number,
    previous: number,
    changes: number
}
export interface CounterCalculator {
    counterSum: number,
    counterSub: number,
    counterMult: number,
    counterDiv: number,

}