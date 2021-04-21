import React from 'react';
import Domains from './Domains';

const Domain = () => {
    const domains = [];
    domains.push('Professional');
    domains.push('Guitar');

    const output = domains.map((item, index) => <Domains name={item} key={index} /> );

    return (
        <div>
            {output}
        </div>
    )
}

export default Domain