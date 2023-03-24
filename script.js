// Copyright (c) 2022 Olantu All rights reserved
//
// Created by: Olantu
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the midpoint formula
 */
const form = document.querySelector('form');
form.addEventListener('submit', calculateMidpoint);

function calculateMidpoint(event) {
	event.preventDefault(); // prevent form from submitting

	// get input values
	const x1 = parseFloat(document.querySelector('#x1').value);
	const y1 = parseFloat(document.querySelector('#y1').value);
	const x2 = parseFloat(document.querySelector('#x2').value);
	const y2 = parseFloat(document.querySelector('#y2').value);
	

	// calculate midpoint
	const midpoint = [(x1 + x2) / 2, (y1 + y2) / 2,];

	// display result
	const result = document.querySelector('#result');
	result.innerHTML = `The midpoint of (${x1}, ${y1}) and (${x2}, ${y2}) is (${midpoint[0]}, ${midpoint[1]})`;

}
