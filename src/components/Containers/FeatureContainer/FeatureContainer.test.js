import { render } from '@testing-library/react';
import React from 'react';
import FeatureContainer from './FeatureContainer';

describe('FeatureContainer', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<FeatureContainer {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FeatureContainer')).toBeTruthy();
    });
});
