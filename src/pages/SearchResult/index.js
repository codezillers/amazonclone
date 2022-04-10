import React from 'react';
import Header from './Header';
import Filters from './Filters';
import Results from "./Results";

const SearchResult = () => {
    return (
        <div className='search-result'>
            <Header title={"Oculus quest 2"} />
            <div className='grid'>
                <div className='search-container' style={{gridColumn: '2/10'}}>
                    <Filters />
                    <Results/>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;