import React from "react";

export const costTriangle = (x,y,w,h) => {
  const d1 = w*0.60
  const d2 = h*(-0.60)
  const xAdjusted = x + w*0.40
  const yAdjusted = y + h*1
  const transformValue = `translate(${xAdjusted},${yAdjusted})`;
  const dValue = `M 0 0,${d1} 0,${d1} ${d2}`
  return(
  <path d={dValue} transform={transformValue} fill="yellow" stroke="black"/>
  )
};

const cellStyles = type => ({
  fill: type.hidden ? "black" : type.color
});

export const cellBack = (type,w,h) => {
  return <rect
    stroke="white"
    width={w}
    height={h}
    x={type.x * w}
    y={type.y * h}
    style={cellStyles(type)}
  />
};

export const symbols ={
  vision : (x,y,scale,fill) => {
  const transformValue = `translate(${x},${y}),scale(${scale})`
  return (
    <path d="M500,132.5c44.5,0,87.7,6.8,129.7,20.3c42,13.5,78.8,31.1,110.6,52.6c31.7,21.6,61.6,45.4,89.5,71.6c27.9,26.2,51.4,52.3,70.5,78.5c19.1,26.1,35.5,50,49.4,71.6c13.9,21.6,24.2,39.1,30.8,52.5l9.6,20.4c-1.5,3.2-3.5,7.5-6.1,12.9c-2.6,5.4-8.6,16.5-18,33.2c-9.4,16.7-19.5,33.2-30.3,49.4c-10.8,16.3-24.9,35.4-42.4,57.5c-17.5,22.1-35.6,42.6-54.4,61.6c-18.7,19-40.9,38.2-66.5,57.6c-25.6,19.4-51.9,35.8-78.8,49.3c-26.9,13.5-57.2,24.5-90.8,33.2c-33.6,8.7-67.8,13-102.7,12.9c-44.5,0-87.7-6.8-129.7-20.3s-78.8-31-110.6-52.5c-31.7-21.5-61.6-45.2-89.5-71.1c-27.9-25.9-51.4-51.9-70.5-78c-19.1-26.1-35.5-49.8-49.4-71.3s-24.2-39-30.8-52.6L10,501.7c1.5-3.2,3.5-7.5,6.1-12.9c2.6-5.4,8.6-16.5,18-33.3s19.5-33.3,30.3-49.6c10.8-16.3,24.9-35.5,42.4-57.8s35.6-42.8,54.4-61.9c18.7-19,40.9-38.3,66.5-57.8s51.9-36,78.8-49.6c26.9-13.6,57.2-24.7,90.8-33.3C430.9,136.9,465.1,132.6,500,132.5L500,132.5z M500,214.1c-29.8,0-59,3.9-87.7,11.8c-28.7,7.9-54.6,18-77.7,30.4c-23.1,12.4-45.6,27.5-67.6,45.1c-22,17.7-41,35.1-57.1,52.2c-16,17.1-31.6,35.5-46.7,55.2c-15.1,19.7-27.1,36.5-36.1,50.6c-8.9,14-17.3,28.1-25.2,42.1c7.9,13.8,16.3,27.7,25.2,41.6c8.9,13.9,20.9,30.6,36.1,50.1c15.1,19.5,30.7,37.7,46.7,54.6c16,16.9,35,34.1,57.1,51.5c22.1,17.4,44.6,32.3,67.6,44.7c23,12.3,48.9,22.4,77.7,30.1c28.7,7.8,58,11.6,87.7,11.6c29.7,0,59-3.9,87.7-11.8c28.7-7.9,54.6-18,77.7-30.3c23-12.3,45.6-27.3,67.6-44.8c22-17.6,41.1-34.8,57.1-51.8c16-17,31.6-35.3,46.7-54.9c15.1-19.6,27.2-36.4,36.1-50.4c8.9-14,17.3-27.9,25.2-41.8c-7.9-13.8-16.3-27.8-25.2-41.8c-8.9-14-20.9-30.8-36.1-50.4S806.1,370,790.1,353c-16-17-35-34.3-57.1-51.8c-22-17.6-44.6-32.5-67.6-44.8c-23-12.3-48.9-22.4-77.7-30.3C559,218.1,529.7,214.2,500,214.1L500,214.1z M500,336.6c45.1,0,83.6,15.9,115.5,47.8c31.9,31.9,47.8,70.4,47.8,115.5c0,45.1-15.9,83.6-47.8,115.5c-31.9,31.9-70.4,47.8-115.5,47.8c-45.1,0-83.6-15.9-115.5-47.8c-31.9-31.9-47.8-70.4-47.8-115.5c0-45.1,15.9-83.6,47.8-115.5C416.4,352.6,454.9,336.6,500,336.6z M500,418.4c-22.5,0-41.8,8-57.8,23.9c-16,16-23.9,35.2-23.9,57.8c0,22.5,8,41.8,23.9,57.8c16,16,35.2,23.9,57.8,23.9c22.5,0,41.8-8,57.8-23.9c16-16,23.9-35.2,23.9-57.8c0-22.5-8-41.8-23.9-57.8C541.8,426.3,522.5,418.4,500,418.4z" transform={transformValue}/>)
  },
  build : (x,y,scale,fill) => {
    const transformValue = `translate(${x},${y}),scale(${scale})`;
//export const buildSymbol = () => {
  return (
    <path fill={fill} d="m 313.699,314.8 14.399,14.8 -64.398,71.199 c -2.8,3 -7.8,3 -10.8,0 l -7.8,-8 c -3,-2.8 -3,-7.8 0,-10.8 L 313.699,314.8 z m 60.4,15.2 -10.8,11 c -2.2,2.2 -5.601,2.2 -8,0 l -2.4,-2.6 c -1.8,-1.6 -2.6,-4.6 -1.6,-6 1.8,-1.2 1.2,-4.8 -2.2,-8 -4.8,-5 -11,-5.2 -13.399,-2.6 -1,0.8 -4.2,4.2 -4.2,4.2 l -14.8,-14.6 2.4,-2.4 c 0,0 0.6,-0.6 1.8,-2 4.6,-4.6 -0.2,-9.8 -0.2,-9.8 -13,-12.8 -31.199,-12.6 -31.199,-12.6 l -0.2,-4.6 c 36.6,-9.4 50.399,6.6 55.399,11.6 4.6,4.6 9.399,9.399 10.6,10.6 2.6,2.6 0,10 3.8,14.2 1.8,1.8 4.2,2.6 6,2.6 2,-1.8 5.2,-1.2 6.8,0.6 l 2.2,2.4 c 2.199,2.2 2.199,5.6 -0.001,8 z"
  transform={transformValue}/>)
  },
  draw : (x,y,scale,fill) => {
    const transformValue = `translate(${x},${y}),scale(${scale})`;
    return (
    <path fill={fill} d="M209.955 488.202l-121.242-46.62c-11.308-4.34-11.643-12.087-.79-17.288L204.8 469.236c15.024 5.777 37.23 4.92 51.774-1.96l161.522-76.6c10.014 4.436 9.864 11.818-.67 16.798L250.43 486.668c-10.983 5.195-29.128 5.902-40.477 1.534zm0-32.37L88.713 409.21C79.09 405.52 77.41 399.36 83.81 394.4l120.99 46.517c15.024 5.776 37.23 4.92 51.774-1.96l165.393-78.433c5.855 4.417 4.38 10.36-4.542 14.58l-166.993 79.193c-10.983 5.196-29.128 5.903-40.477 1.534zm0-28.314L88.713 380.892c-9.624-3.69-11.302-9.85-4.902-14.813l120.99 46.523c15.024 5.77 37.23 4.914 51.774-1.96l165.393-78.438c5.855 4.416 4.38 10.36-4.542 14.58l-166.993 79.2c-10.983 5.194-29.128 5.895-40.477 1.533zm0-28.32L88.713 352.572c-9.624-3.69-11.302-9.85-4.902-14.812l120.99 46.524c15.024 5.776 37.23 4.92 51.774-1.96l165.393-78.44c5.855 4.424 4.38 10.368-4.542 14.586l-166.993 79.194c-10.983 5.196-29.128 5.897-40.477 1.534zm0-28.32L88.713 324.26c-11.35-4.355-11.643-12.15-.66-17.353l87.236-41.376 34.826 18.323c15.365 8.09 37.937 7.06 52.5-2.39l65.74-42.672 88.404 34.007c11.344 4.357 11.65 12.16.665 17.354l-166.993 79.195c-10.983 5.195-29.128 5.902-40.477 1.534zm6.85-99.73L93.44 206.22c-10.767-5.67-11.217-15.647-1.018-22.268l105.11-68.228h25.845l.015 64.962h58.664v-64.962H332.2l-27.487-41.39 118.91 62.584c10.763 5.67 11.212 15.646 1.013 22.268L254.803 269.418c-10.2 6.62-27.23 7.4-37.997 1.73zm21.637-105.523V100.67h-34.845l49.13-79.74 49.12 79.74H267v64.955h-28.558z" transform={transformValue}/>
    )
  },
  missile : (x,y,scale,fill) => {
    const transformValue = `translate(${x},${y}),scale(${scale})`;
    return (
      <g transform={transformValue}>
      <path fill={fill} d="M2900.8,3946.4L2684.5,2861l343.8-347.6c490.5-494.4,950.2-969.5,952.1-981.1c0-5.8-96.6-106.2-212.4-222.1l-212.4-212.4l-656.6,656.6L2242.3,2411l-1056.4-210.5c-583.2-115.9-1069.9-216.3-1085.3-224C67.7,1959.1,1467.9,557.1,1691.9,383.3c411.3-318.7,764.8-450,1156.8-428.7c220.2,11.6,368.9,54.1,540.7,158.4c59.9,34.8,108.2,61.8,108.2,59.9c0-3.9-23.2-48.3-52.1-100.4c-48.3-85-54.1-113.9-54.1-278.1c0-162.2,5.8-195.1,52.1-280c36.7-69.5,415.2-459.6,1394.3-1438.8L6182-3266.7l1091.1,1091.1l1091.1,1091.2L7027.9,253.9c-1506.4,1506.3-1450.3,1458.1-1720.7,1460c-115.9,0-158.4-9.7-254.9-56c-63.7-30.9-123.6-59.9-135.2-63.7c-9.7-5.8-5.8,7.7,11.6,27c56,63.7,152.6,274.2,185.4,399.8c42.5,168,38.6,448-11.6,639.2c-50.2,189.3-177.7,448-324.4,654.7c-73.4,106.2-370.8,419.1-886.4,938.6l-774.4,778.3L2900.8,3946.4z"/>
      <path fill={fill} d="M7707.6-2612.1L6616.5-3703.2l309-303.2c237.5-231.8,345.7-322.5,459.6-388.2c231.7-131.3,426.8-208.6,708.8-280c417.1-106.2,687.5-135.2,1268.8-137.1c278.1,0,511.8,7.7,521.4,15.4c25.1,27.1,19.3,1044.8-9.7,1259.2c-79.2,594.8-256.8,1100.8-506,1423.3c-50.2,67.6-200.8,227.9-332.2,357.3L8798.8-1519L7707.6-2612.1z"/></g>
    )
  },
  enhancement : (x,y,scale,fill) => {
    const transformValue = `translate(${x},${y}),scale(${scale})`;
    return (
      <g transform={transformValue}>
        <path fill={fill} d="M56.452,54.774l6.297-1.147c0.017-1.813-0.124-3.616-0.415-5.388l-6.397-0.192c-0.444-2.078-1.15-4.098-2.102-6.003   l4.879-4.143c-0.879-1.571-1.896-3.064-3.042-4.47l-5.637,3.035c-1.401-1.559-3.016-2.957-4.829-4.149l2.15-6.025   c-0.769-0.457-1.562-0.889-2.386-1.284c-0.82-0.395-1.646-0.741-2.479-1.059l-3.365,5.447c-2.062-0.673-4.163-1.065-6.258-1.189   l-1.149-6.296c-1.813-0.02-3.614,0.12-5.385,0.411l-0.193,6.397c-2.081,0.444-4.101,1.15-6.008,2.104l-4.146-4.878   c-1.565,0.882-3.059,1.898-4.46,3.042l3.032,5.633c-1.559,1.401-2.961,3.022-4.153,4.836C8.22,38.676,6.158,37.94,4.38,37.304   c-0.454,0.774-0.885,1.562-1.28,2.382s-0.742,1.649-1.062,2.486c1.607,0.993,3.466,2.144,5.443,3.365   c-0.67,2.062-1.062,4.166-1.187,6.261l-6.293,1.149c-0.02,1.811,0.121,3.61,0.412,5.385l6.397,0.189   c0.447,2.085,1.156,4.107,2.107,6.009L4.04,68.674c0.883,1.568,1.896,3.062,3.046,4.466l5.63-3.035   c1.408,1.559,3.025,2.957,4.835,4.149l-2.146,6.025c0.765,0.451,1.556,0.882,2.376,1.274c0.823,0.398,1.653,0.748,2.492,1.062   l3.366-5.44c2.058,0.67,4.159,1.062,6.25,1.184l1.15,6.296c1.813,0.02,3.613-0.124,5.388-0.412l0.196-6.4   c2.078-0.444,4.094-1.15,5.999-2.104l4.143,4.875c1.568-0.875,3.062-1.892,4.467-3.035l-3.032-5.64   c1.556-1.401,2.95-3.016,4.143-4.829l6.025,2.153c0.454-0.771,0.889-1.565,1.284-2.385c0.392-0.817,0.738-1.65,1.059-2.487   l-5.443-3.365C55.937,58.966,56.328,56.868,56.452,54.774z M42.814,58.783c-3.039,6.319-10.622,8.979-16.941,5.937   c-6.319-3.035-8.979-10.619-5.937-16.938c3.038-6.319,10.622-8.979,16.938-5.94C43.193,44.881,45.854,52.464,42.814,58.783z"/>
        <path fill={fill} d="M93.942,35.007L100,32c-0.379-1.686-0.954-3.326-1.715-4.878l-6.61,1.435c-0.921-1.467-2.095-2.794-3.493-3.901l2.16-6.407   c-0.722-0.457-1.474-0.886-2.261-1.265c-0.791-0.379-1.592-0.699-2.401-0.977l-3.66,5.685c-1.738-0.398-3.506-0.489-5.228-0.29   l-3.006-6.058c-1.687,0.375-3.326,0.95-4.878,1.708l1.434,6.607c-1.47,0.918-2.803,2.091-3.917,3.492   c-2.255-0.761-4.474-1.506-6.407-2.159c-0.461,0.725-0.893,1.479-1.271,2.277c-0.379,0.78-0.695,1.574-0.974,2.378   c1.716,1.102,3.689,2.373,5.688,3.656c-0.408,1.748-0.496,3.522-0.297,5.254c-2.131,1.056-4.231,2.098-6.062,3.007   c0.376,1.683,0.948,3.319,1.706,4.871c1.996-0.435,4.283-0.931,6.606-1.435c0.925,1.48,2.104,2.816,3.516,3.935l-2.163,6.403   c0.723,0.458,1.471,0.883,2.265,1.262c0.784,0.379,1.584,0.699,2.389,0.98c1.104-1.716,2.368-3.689,3.659-5.692   c1.751,0.409,3.532,0.494,5.267,0.294l3,6.055c1.686-0.379,3.322-0.95,4.875-1.712c-0.435-1.993-0.932-4.283-1.435-6.61   c1.47-0.921,2.803-2.101,3.917-3.509l6.408,2.156c0.454-0.715,0.875-1.46,1.251-2.244c0.379-0.794,0.706-1.602,0.983-2.411   l-5.688-3.663C94.057,38.503,94.146,36.729,93.942,35.007z M85.052,39.917c-1.729,3.588-6.034,5.098-9.619,3.372   c-3.588-1.725-5.097-6.031-3.372-9.619c1.723-3.588,6.032-5.097,9.619-3.372C85.265,32.021,86.773,36.33,85.052,39.917z"/> </g>
      )
    },
    cost : (x,y,scale,fill) => {
      const transformValue = `translate(${x},${y}),scale(${scale})`;
      return(
        <path d="M 0 0, 5 5,0 10,-5 5" fill={fill} transform={transformValue}></path>
      )
    }
  }