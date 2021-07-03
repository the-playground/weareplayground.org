/**
 * Handles stateless & optionally stateful fetching.
 *
 * @param url
 * @param setter
 */
export const fetchDataWithState = async <R>(
    url: RequestInfo,
    setState?: DataStateSetter<R>
) => {
    const initialResponse: Response = await fetch(url);
    await initialResponse
        .json()
        .then((response: R) => {
            setState((prevState) => ({
                ...prevState,
                data: response,
                status: 'success',
            }));

            return response;
        })
        .catch((error) => {
            setState((prevState) => ({
                ...prevState,
                status: 'failure',
                error: true,
            }));

            throw error;
        });
};

export interface DataState<T> {
    data: T;
    error: boolean;
    status: 'initial' | 'loading' | 'success' | 'failure';
}
export type DataStateSetter<T> = React.Dispatch<
    React.SetStateAction<DataState<T>>
>;
