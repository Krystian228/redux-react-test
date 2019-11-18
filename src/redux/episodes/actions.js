export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchItems = (page = 1) =>  dispatch => {

    dispatch({ type: FETCH_REQUEST});
    
    return fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
            .then(response => response.json())
            .then(data => {
                if(data.error){
                    dispatch({ type: FETCH_FAILURE, payload: { error: data.error } });
                }else{
                    dispatch({ type: FETCH_SUCCESS, payload: { data } });
                }
            })
            .catch(error => dispatch({ type: FETCH_FAILURE, payload: { error } }))
}