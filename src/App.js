import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "./components/card/card";

import { fetchItems } from './redux/episodes/actions';

import "./App.css";

/**
 * The App  
 */

function App() {

  const [showEpisodes, setShowEpisodes] = useState(true);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const data = useSelector(state => state.episodesReducer);

  useEffect(()=>{
    dispatch(fetchItems(page));
  }, [])

  const toggleEpisodes = () => {
    setShowEpisodes(!showEpisodes);
  }

  const changePage = (nmPage) => {
    setPage(nmPage);
    dispatch(fetchItems(nmPage));
  }
  
  if(data.isLoading){
    return <h1>..loading</h1>
  }

  if(data.error){
    return <h1>Oho!!! - {data.errorMsg}</h1>
  }

  return (
    <main>
      {console.log(data)}
      <h1>List of episodes <button onClick={()=>toggleEpisodes()}>{showEpisodes?'show all':'hide'}</button></h1>
      {data.data && data.data.length > 0 && data.data.map(item => 
        <Card 
          key={item.id}
          id={item.id}
          name={item.name} 
          date={item.air_date}
          episode={item.episode}
          characters={item.characters}
          collapsed={showEpisodes}
        />)}
        <div className="pagination">
          <button disabled={data.info && data.info.prev !== ''?false:true} onClick={()=> changePage(page - 1)}>prev</button>
          <button disabled={data.info && data.info.next !== ''?false:true} onClick={()=> changePage(page + 1)}>next</button>
        </div>
    </main>
  );
}

export default App;
