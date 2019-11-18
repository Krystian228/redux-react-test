import React from 'react';
import withCollapse from "./../collapse/collapse";
import CharacterList from './../characters/characterList';

const Card =({id, name, date, episode, characters, isCollapsed, toggle}) => (
    <div className="card">
    <h3>{name}<button onClick={()=>toggle()}>{isCollapsed?'+':'-'}</button></h3>
    <ul className={isCollapsed?'isCollapsed':''}>
        <li>id: {id}</li>
        <li>name: {name}</li>
        <li>air date: {date}</li>
        <li>episode: {episode}</li>
        <li><CharacterList id={id} list={characters.map(item => item.split('/').slice(-1)[0])}/></li>
    </ul>
    </div>
);

export default withCollapse(Card);