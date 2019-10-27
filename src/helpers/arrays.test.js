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
    it('merge 2 arrays with key2 as the wrong key', () => {
        const array1 = [{value: '1', id: '1'}]
        const array2 = [{user: '2', id: '1'}]
        const key1 = 'id'
        const key2 = 'wrongid'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([{value: '1', id: '1'}])
    })
    it('merge 2 arrays with key1 as the wrong key', () => {
        const array1 = [{value: '1', id: '1'}]
        const array2 = [{user: '2', id: '1'}]
        const key1 = 'wrongid'
        const key2 = 'id'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([{value: '1', id: '1'}])
    })
    it('merge 2 arrays array1 with data and array2 without data', () => {
        const array1 = [{value: '1', id: '1'}]
        const array2 = []
        const key1 = 'id'
        const key2 = 'id'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([{value: '1', id: '1'}])
    })
    it('merge 2 arrays array2 with data and array1 without data', () => {
        const array1 = []
        const array2 = [{value: '1', id: '1'}]
        const key1 = 'id'
        const key2 = 'id'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([{value: '1', id: '1'}])
    })

    it('array1 is not array', () => {
        const array1 = ''
        const array2 = [{value: '1', id: '1'}]
        const key1 = 'id'
        const key2 = 'id'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([{value: '1', id: '1'}])
    })

    it('array2 is not array', () => {
        const array1 = [{value: '1', id: '1'}]
        const array2 = ''
        const key1 = 'id'
        const key2 = 'id'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([{value: '1', id: '1'}])
    })

    it('array1 and array2 are not arrays', () => {
        const array1 = ''
        const array2 = ''
        const key1 = 'id'
        const key2 = 'id'
        expect(mergeObjectsArrayById(array1, array2, key1, key2)).toEqual([])
    })

})

