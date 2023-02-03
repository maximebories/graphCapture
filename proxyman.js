// Copyright (C) 2023 Maxime Bories
// 
// This file is part of graphCapture.
// 
// graphCapture is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// graphCapture is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with graphCapture.  If not, see <http://www.gnu.org/licenses/>.

async function onResponse(context, url, request, response) {
	// Define the JSON body and headers
	var param = {
		body: {
			"user": {
				"name": "Proxyman"
			}
		},
		headers: {
			"Content-Type": "application/json"
		}
	};

	// Send the HTTP POST request to the server
	var output = await $http.post('http://localhost:3000/api/items', param);

	// Get Status Code
	console.log(output.statusCode);

	// Get body
	console.log(output.body);

	// Get header
	console.log(output.headers);

	// Done
	return response;
}