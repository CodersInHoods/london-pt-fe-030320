import React from "react";
import { render, fireEvent, screen, waitForElementToBeRemoved } from "@testing-library/react";

import App from "./App";

describe("App", () => {
	test("should render all players in default column", () => {
		const { container } = render(<App />);
		const playersEl = container.querySelectorAll(".players li");

		expect(playersEl.length).toBeGreaterThan(1);
	});
	
	test("clicking team button moves player to correct team", async () => {
		const { container } = render(<App />);

		const team1Buttons = screen.getAllByText("Team 1");
		
		team1Buttons.slice(0, team1Buttons.length / 2).forEach(button => fireEvent.click(button));

		await waitForElementToBeRemoved(() => {
			const team2Buttons = screen.getAllByText("Team 2");
			team2Buttons.forEach(button => fireEvent.click(button));
			return team2Buttons;
		})

		const players = container.querySelectorAll(".players li");

		expect(players.length).toBe(0);
	});
});
