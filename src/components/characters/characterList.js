import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCharacters } from './../../redux/characters/actions';

const CharacterList = ({id, list}) => {

    const dispatch = useDispatch();

    const data = useSelector(state => state.charactersReducer);

    useEffect(()=>{
        dispatch(fetchCharacters(id, list));
    }, [])

    if(data.isLoading){
        return <div><b>..loading</b></div>
      }
    
    if(data.error){
    return <div>Oho!!! - {data.errorMsg}</div>
    }

    const characters = data.data.filter(item=> list.map(Number).includes(item.id) )

    return(
    <div>
        {characters.map(item=> `${item.name}, `)}
    </div>
    )
    
}

export default CharacterList