/* eslint-disable no-plusplus */

// codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
export const asyncForEach = async (
    array: unknown[],
    callback: CallableFunction
) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};
