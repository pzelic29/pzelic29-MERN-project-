import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewPlace from './NewPlace';
test('renderira sadrzaj', () => {
 const place = {
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',

 }
 const komponenta = render(
 <NewPlace place={place} />
 )
 expect(komponenta.container).toBeDefined()
})
test('renderira sadrzaj', () => {
    const place = {
       title: 'Empire State Building',
       description: 'One of the most famous sky scrapers in the world!',
       image:
           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
       address: '20 W 34th St, New York, NY 10001',
   
    }
    const komponenta = render(
    <NewPlace place={place} />
    )
    const element= komponenta.getByText("ADD PLACE")
    expect(element).toBeDefined()
   })
   test('renderira sadrzaj', () => {
    const place = {
       title: 'Empire State Building',
       description: 'One of the most famous sky scrapers in the world!',
       image:
           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
       address: '20 W 34th St, New York, NY 10001',
   
    }
    const komponenta = render(
    <NewPlace place={place} />
    )
    const div= komponenta.container.querySelector("#title")
    expect(div).toHaveTextContent('')
   })
   test('renderiranje', () =>{
    const komponenta = render(
        <NewPlace  />
        )
    expect(
    komponenta.container.querySelector('#btnform')
    ).toBeFalsy()
    })
   
   