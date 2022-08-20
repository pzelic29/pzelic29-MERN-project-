import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Auth from './Auth.js';
test("", () => {
    const component = render(<Auth></Auth>)
    const btn = component.getByText("LOGIN")

    fireEvent.click(btn)
    //component.debug()
    expect(component.container.querySelector('#btnswitch')).toBeTruthy()
})