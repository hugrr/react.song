import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			song: [
				{
					id: 0,
					category: "juego",
					name: "mario castle",
					url: "data/mario/fx_gameover.wav"
				},
				{
					id: 1,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				},

				{
					id: 2,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				},
				{
					id: 3,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				},
				{
					id: 4,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				},
				{
					id: 5,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				},

				{
					id: 6,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				},
				{
					id: 7,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				},

				{
					id: 8,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				},
				{
					id: 9,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				},
				{
					id: 10,
					category: "game",
					name: "Jump Super",
					url: "data/mario/fx_jump_super.wav"
				}
			]
		};
	}

	render() {
		return (
			<div className="container">
				<table className="table table-dark">
					<thead>
						<tr>
							<th scope="col">id</th>
							<th scope="col">name</th>
							<th scope="col">category</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{this.state.song[0].id}</td>
							<td>{this.state.song[0].name}</td>
							<td>{this.state.song[0].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[1].id}</td>
							<td>{this.state.song[1].name}</td>
							<td>{this.state.song[1].category}</td>
						</tr>

						<tr>
							<td>{this.state.song[2].id}</td>
							<td>{this.state.song[2].name}</td>
							<td>{this.state.song[2].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[3].id}</td>
							<td>{this.state.song[3].name}</td>
							<td>{this.state.song[3].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[4].id}</td>
							<td>{this.state.song[4].name}</td>
							<td>{this.state.song[4].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[5].id}</td>
							<td>{this.state.song[5].name}</td>
							<td>{this.state.song[5].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[6].id}</td>
							<td>{this.state.song[6].name}</td>
							<td>{this.state.song[6].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[6].id}</td>
							<td>{this.state.song[6].name}</td>
							<td>{this.state.song[6].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[7].id}</td>
							<td>{this.state.song[7].name}</td>
							<td>{this.state.song[7].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[8].id}</td>
							<td>{this.state.song[8].name}</td>
							<td>{this.state.song[8].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[9].id}</td>
							<td>{this.state.song[9].name}</td>
							<td>{this.state.song[9].category}</td>
						</tr>
						<tr>
							<td>{this.state.song[10].id}</td>
							<td>{this.state.song[10].name}</td>
							<td>{this.state.song[10].category}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
