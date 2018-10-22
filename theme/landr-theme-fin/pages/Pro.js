import React from 'react';
import { getSiteProps } from '@resin.io/react-static';
import JumbotronPro from '../components/JumbotronPro';
import FeaturesPro from '../components/FeaturesPro';
import MotivationPro from '../components/MotivationPro';
import get from 'lodash/get';

export default getSiteProps(props => {
    const getter = key => get(props, key);
    return (
        <div>
            <JumbotronPro {...props} />
            {getter('settings.motivationPro') && <MotivationPro {...props} />}
            {getter('settings.featuresPro') && <FeaturesPro {...props} />}
        </div>
    );
});