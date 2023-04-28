export const pageData = (fetchedData: any) => {
    if (!fetchedData){
        return {
            props: {
            data: {
                errorMessage: "There was a problem retrieving content "
            }
            }
        };
    }
    const res = {
        props: {data: {
            content: []
        }}
    };
    
    res.props.data.content = fetchedData && fetchedData.length > 0 && fetchedData.slice(1, fetchedData.length) // remove sheet header
    return res;
}