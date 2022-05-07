type SuperPrint = <T>(a: T[]) => T

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1,2,3,4])