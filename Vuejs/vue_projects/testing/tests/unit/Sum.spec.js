import sum from '../../src/components/Sum'


test("first test", ()=>{
    let data=100
    expect(data).toBe(100)
})

it("second test", ()=>{
    let data=90
    expect(data).toBe(90)
})

describe("sum function testing",() => {
    test("first sum test", () => {
        expect(sum(1,2)).toBe(3)
    })

})

// describe("sum object testing" , () =>{
//     it('object check',() => {
//         expect(sum(3,4)).toEqual({name:"Shreyas"})
//     })
// })