/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render} from '@testing-library/react';
import * as Gatsby from "gatsby"

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
    site: {
        siteMetadata: {
            title: `Gatsby Default Starter`,
            description: 'Description',
            twitter: '@foo',
        }
    },
}

import Page404 from '../404';

describe('page404', () => {
    beforeEach(() => {
        useStaticQuery.mockImplementation(() => mockUseStaticQuery)
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('renders correctly', () => {
        const {container} = render(<Page404 />);
        expect(container).toBeTruthy();
    });

});
