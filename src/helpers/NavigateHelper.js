export const navigateQueryToObject = (query) =>
{
    if(query && query.trim().length>1)
    {
        query = query.charAt(0) === '?'?query:`?${query}`
        return query
            .slice(1)
            .split('&')
            .reduce(
                (acc,curr) => {
                    const [key,value] = curr.split('=');
                    acc[key]=value;
                    return acc
                }
                ,({})
            )
    }
    return '';
}