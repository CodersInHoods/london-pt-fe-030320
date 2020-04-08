document.body.innerHTML = `
    <h1>Counter exercise</h1>
	<div class="inc">
		<h4>Current step is: <span class="step_value">0</span></h4>
	</div>
	<form action="#" class="step_form">
		<label for="step">Step</label>
		<input type="number" id="step" value="1"/>
		<button>Set step</button>
	</form>
	<h2>Counter value</h2>
	<p class="counter_value">0</p>

	<div class="inc_dec">
		<button id="decrement">-</button>
		<button id="increment">+</button>
	</div>
	<div class="auto_inc_dec">
		<button id="auto_decrement">Auto Decrement</button>
		<button id="auto_increment">Auto Increment</button>
		<button id="stop_auto">Stop</button>	
    </div>
`;
