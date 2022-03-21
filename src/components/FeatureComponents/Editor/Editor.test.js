import { render } from '@testing-library/react';
import React from 'react';
import Editor from './Editor';

describe('Editor', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Editor {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Editor')).toBeTruthy();
    });
});
