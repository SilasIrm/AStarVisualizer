/**
 * 		Static Class containing main astar calculation functions
 *  	Purpose: bachelor thesis
 *  	Author: silas irmisch
 */

// import Grid from './Grid/Grid.js'
// import Graph from './Graph/Graph.js'
// import Vertex from './Graph/Vertex.js'
// import Edge from './Graph/Edge.js'
const Grid = require('./Grid/Grid.js')
const Graph = require('./Graph/Graph.js')
const Vertex = require('./Graph/Vertex.js')
const Edge = require('./Graph/Edge.js')

module.exports = class AStar {
	// fields
	static _grid
	static _graph

	// build Grid from data in parameters
	// @params: startPosition and endPosition as Object(x in int, y in int), weights in 2DArray of ints, scale in Array(lenght=4), width and height in int
	// @return: grid as Grid-Object
	static buildGrid(startPosition, endPosition, weights, scale, width = 10, height = 10) {
		this._grid = new Grid(startPosition, endPosition, weights, scale, width, height)
		return this._grid
	}

	// build Graph from data in parameters
	static buildGraph() {
		// not needed for BA Implementation: We always build from Grid
		throw 'EXCEPTION: function not implemented. Use translateGridToGraph() instead.'
	}

	// @return: Grid-Object
	static getGrid() {
		return this._grid
	}

	// build Graph from Grid
	// @params: optional: call with separate grid, standard is data in _grid-field
	// @return: grpah as Graph-Object
	static translateGridToGraph(grid = this._grid) {
		// Vertex-Array first
		let vertices = []
		for (let cells in grid._cells) {
			for (let cell in cells) {
				let id = cell._x * grid._width + cell._y
				vertices.push(new Vertex(id))
			}
		}

		console.log(vertices)
		// this._graph = new Graph(false, [], [])
		// return this._graph
	}
}
