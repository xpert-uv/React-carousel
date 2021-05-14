// Smokeing Test 

import React from "react";
import { render } from '@testing-library/react'
import Card from "./Card";

test("show the card component is renderd", () => {
    render(<Card />);
})