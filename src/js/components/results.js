import React, { Component } from 'react';

export default ({results, handleSave, saved}) => {
    return (
        <div>
            {saved && <div>{saved.length} items saved</div>}
            {results && results.map(result => (
                <div key={ result.href }>
                    <h3>{result.data[0].title}</h3>
                    <p>{result.data[0].description}</p>
                    <img src={result.links[0].href} />
                    <button onClick={() => handleSave(result)}>Save</button>
                </div>
            ))}
        </div>
    )
}