import React, { Component } from 'react';

export default ({ query, handleChange, handleSubmit }) => (
    <div>
        Here is the input presentational
        <p>Search</p>
        <form onSubmit={handleSubmit}>
            <input value={query} 
                onChange={handleChange} 
                placeholder="Search for nasa"/>
        </form>
    </div>
);