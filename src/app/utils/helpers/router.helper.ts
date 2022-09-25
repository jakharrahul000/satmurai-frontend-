/**
 * get route query parameters as object
 * @param search search string of route
 * @returns route query parameters
 */
export const getRouteQueryParams = (search: string): URLSearchParams => {
    const queryParams = new URLSearchParams(search);

    return queryParams;
};

/**
 * take old query string, and add new key value
 * @param oldQueryString
 * @param key new key
 * @param value value of key
 * @returns new query string
 */
export const getRouteQueryParamsString = (
    oldQueryString: string,
    key: string,
    value: string,
): string => {
    const queryParams = new URLSearchParams(oldQueryString);
    queryParams.set(key, value);
    return queryParams.toString();
};

/**
 * called every time route is changed
 */
export const handleRouteChange = (): void => {
    window.scrollTo(0, 0);
};
