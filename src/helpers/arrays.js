import _ from 'lodash'
export function mergeObjectsArrayById(array1, array2, key1, key2) {
    const mergedList = array1.map(item => {
        const result = array2.find(function(element){
            return element[key2] === item[key1]
        })
        if(result) {
            return Object.assign(item, _.omit(result, 'id'))
        }
        return item
    })
    return mergedList
}
