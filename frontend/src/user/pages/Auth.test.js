import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Auth from './Auth.js';
test("", () => {
    const component = render(<Auth></Auth>)
    const btn = component.getByText("LOGIN")

    //component.debug()
    expect(
        component.container.querySelector('#btn')
        ).toBeFalsy()
})