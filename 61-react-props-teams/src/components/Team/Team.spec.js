import React from "react";
import { render } from "@testing-library/react";

import Team from "./Team";

describe("Team", () => {
	const team = ['Alex', 'Andrew', 'Ben'];
    
    test("should have class team", () => {
        const { container } = render(<Team players={team}/>);
		const teamEl = container.querySelectorAll('.team');
        
        expect(teamEl.length).toEqual(1);
    });

	test("should render all players", () => {
        const { container } = render(<Team players={team}/>);
		const players = container.querySelectorAll('.player');
        
        expect(players.length).toEqual(3);
    });
});
