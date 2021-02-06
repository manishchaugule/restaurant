import React from 'react';
import './index.scss';

export default function ApplictaionCheckbox ({onClick}) {
    return (
        <div>
            <input type="checkbox" name="inStock" onClick={e=> onClick(e.target.checked)} />
            <label htmlFor="inStock"> Show Only In-Stock Items</label>
        </div>
        
    )
}