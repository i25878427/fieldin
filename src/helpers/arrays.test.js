import {mergeObjectsArrayById} from './arrays'

describe('Testing array helper', () => {
    it('merge 2 empty arrays', () => {
        const array1 = []
        const array2 = []
        const key1 = 'id'
        const key2 = 'id'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([])
    })

    it('merge 2 arrays', () => {
        const array1 = [{value: '1', id: '1'}]
        const array2 = [{user: '2', id: '1'}]
        const key1 = 'id'
        const key2 = 'id'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([{value: '1', user: '2', id: '1'}])
    })

    it('merge 2 arrays with wrong keys', () => {
        const array1 = [{value: '1', id: '1'}]
        const array2 = [{user: '2', id: '1'}]
        const key1 = 'id'
        const key2 = 'wrongid'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([{value: '1', id: '1'}])
    })
})

