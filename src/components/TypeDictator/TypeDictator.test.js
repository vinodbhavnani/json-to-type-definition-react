import { render } from '@testing-library/react';
import React from 'react';
import TypeDictator from './TypeDictator';

describe('TypeDictator', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<TypeDictator {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('TypeDictator')).toBeTruthy();
    });
});
