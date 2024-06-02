import {LineWave} from 'react-loader-spinner';
import React from 'react';

const Loader: React.FC = () => {
    return (
        <LineWave
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
        />
    );
}

export default Loader;