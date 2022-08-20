import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Users from './Users.js';

test('renderira sadrzaj', () => {
    const komponenta = render(
    <Users />
    )
    expect(komponenta.container).toBeDefined()
   })

   test('renderira sadrzaj', () => {
    const komponenta = render(
    <Users />
    )
    expect(komponenta.container).toBeDefined()
   })