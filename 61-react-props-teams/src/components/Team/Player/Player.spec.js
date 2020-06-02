import React from "react";
import { render } from "@testing-library/react";

import Player from "./Player";

describe("Player", () => {
    test("should have class player", () => {
        const { container } = render(<Player players={'Alex'}/>);
		const playerEl = container.querySelectorAll('.player');
        
        expect(playerEl.length).toEqual(1);
    });

	test("should render a player", () => {
        const { container } = render(<Player player={'Josh'}/>);

        expect(container.innerHTML.includes('Josh')).toBe(true);
    });
});
