/* Used by both the map object and the MapDisplay component */
export const mapDimensions = {
  width: 20,
  height: 10
};

/* In pixel */
export const cellSize = {
  width: 30,
  height: 30
}

/* #FIXME Enhance costTextFunction whithout redundency powerSize usage (based on self prop values) */
export const powerSize = {
  width: 100,
  height: 120,
  boxFactor: 1.2,
  x: 20,
  y: 20,
  costTextX:(powerSize)=>powerSize.x+powerSize.width*0.7,
  costTextY:(powerSize)=>powerSize.y+powerSize.height*0.85
};
