import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Loading = () => {
    return(
        <div style={{fontSize: 32, height: '100%'}} className="text-center pt-5">
              <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-pulse spinner"/>
            <p>Loading . . .</p>
        </div>
    );
};