export default function waitForAll(...promises) {
    // This function returns a promise which will be triggered when all the `promises` are completed.
    //
    // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
    // if one of the `promises` is rejected, then the returned promise will be rejected.
    //
    // Your target:
    //
    // * Please implement this function and pass all the tests in wait_for_all_spec.js.
    // * Please do NOT modify the signature of the function.

    // Promise.allSettled() is unavailable

    promises.forEach(p => {
        if (!(p instanceof Promise)) {
            throw new Error('Not all elements are promises.')
        }
    })

    // Promise.allSettled() is unavailable in node.js 10.5.3
    // return new Promise((resolve, reject) => {
    //     Promise.allSettled(promises).then(results =>{
    //         results.forEach(result => {
    //             if (result.status === 'rejected') {
    //                 reject()
    //             }
    //         })
    //         resolve()
    //     })
    // });

    return new Promise((resolve, reject) => {
        Promise.all(promises.map(p => p.catch(() => false))).then(values => {
            values.map(v => {
                if(v === false){
                    reject()
                }
            })
            resolve()
        }).catch(() => {
            reject()
        })
    })
}
