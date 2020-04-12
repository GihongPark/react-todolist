import React from 'react';

function Todo({todo}) {

    return (
        <div className='todo'>
            <span>{todo}</span>
        </div>
    );
}

export default React.memo(Todo);