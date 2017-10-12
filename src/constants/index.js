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
}

export const symbolSize = {
    vision: {
      x: (powerSize)=>powerSize.width*0.5,
      y: (powerSize)=>powerSize.height/6,
      scale: (powerSize) => 0.04
    },
    build: {
      x: (powerSize)=>-7,
      y: (powerSize)=>-43,
      scale: (powerSize) => 0.25
    },
    draw: {
      x: (powerSize)=>53,
      y: (powerSize)=>22,
      scale: (powerSize) => 0.07
    },
    missile: {
      x: (powerSize)=>53,
      y: (powerSize)=>40,
      scale: (powerSize) => "0.003,-0.003"
    },
    enhancement: {
      x: (powerSize)=>50,
      y: (powerSize)=>20,
      scale: (powerSize) => 0.5
    },
    cost: {
      x: (powerSize)=>70,
      y: (powerSize)=>25,
      scale: (powerSize) => 3
    }
  };
