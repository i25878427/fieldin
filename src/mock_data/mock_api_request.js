/* istanbul ignore file */
export const fakeData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 0);

    })
} 