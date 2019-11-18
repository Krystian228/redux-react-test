
export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const fetchCharacters = (episodeId, ids) => dispatch => {

    dispatch({ type: FETCH_CHARACTERS_REQUEST});
    
    return fetch(`https://rickandmortyapi.com/api/character/${ids}`)
            .then(response => response.json())
            .then(data => {
                if(data.error){
                    dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: { error: data.error } });
                }else{
                    dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: { data, episodeId } });
                }
            })
            .catch(error => dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: { error } }))

}