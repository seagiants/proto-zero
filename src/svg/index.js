import React from "react";

export const costSymbole = (x,y) => {
  const transformValue = `translate(${x},${y})`;
  return(
    <path d="M 0 0, 5 5,0 10,-5 5" fill="white" transform={transformValue}></path>
  )
}

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

export const symbols ={
  vision : (x,y,scale) => {
  const transformValue = `translate(${x},${y}),scale(${scale})`
  return (
    <path d="M500,132.5c44.5,0,87.7,6.8,129.7,20.3c42,13.5,78.8,31.1,110.6,52.6c31.7,21.6,61.6,45.4,89.5,71.6c27.9,26.2,51.4,52.3,70.5,78.5c19.1,26.1,35.5,50,49.4,71.6c13.9,21.6,24.2,39.1,30.8,52.5l9.6,20.4c-1.5,3.2-3.5,7.5-6.1,12.9c-2.6,5.4-8.6,16.5-18,33.2c-9.4,16.7-19.5,33.2-30.3,49.4c-10.8,16.3-24.9,35.4-42.4,57.5c-17.5,22.1-35.6,42.6-54.4,61.6c-18.7,19-40.9,38.2-66.5,57.6c-25.6,19.4-51.9,35.8-78.8,49.3c-26.9,13.5-57.2,24.5-90.8,33.2c-33.6,8.7-67.8,13-102.7,12.9c-44.5,0-87.7-6.8-129.7-20.3s-78.8-31-110.6-52.5c-31.7-21.5-61.6-45.2-89.5-71.1c-27.9-25.9-51.4-51.9-70.5-78c-19.1-26.1-35.5-49.8-49.4-71.3s-24.2-39-30.8-52.6L10,501.7c1.5-3.2,3.5-7.5,6.1-12.9c2.6-5.4,8.6-16.5,18-33.3s19.5-33.3,30.3-49.6c10.8-16.3,24.9-35.5,42.4-57.8s35.6-42.8,54.4-61.9c18.7-19,40.9-38.3,66.5-57.8s51.9-36,78.8-49.6c26.9-13.6,57.2-24.7,90.8-33.3C430.9,136.9,465.1,132.6,500,132.5L500,132.5z M500,214.1c-29.8,0-59,3.9-87.7,11.8c-28.7,7.9-54.6,18-77.7,30.4c-23.1,12.4-45.6,27.5-67.6,45.1c-22,17.7-41,35.1-57.1,52.2c-16,17.1-31.6,35.5-46.7,55.2c-15.1,19.7-27.1,36.5-36.1,50.6c-8.9,14-17.3,28.1-25.2,42.1c7.9,13.8,16.3,27.7,25.2,41.6c8.9,13.9,20.9,30.6,36.1,50.1c15.1,19.5,30.7,37.7,46.7,54.6c16,16.9,35,34.1,57.1,51.5c22.1,17.4,44.6,32.3,67.6,44.7c23,12.3,48.9,22.4,77.7,30.1c28.7,7.8,58,11.6,87.7,11.6c29.7,0,59-3.9,87.7-11.8c28.7-7.9,54.6-18,77.7-30.3c23-12.3,45.6-27.3,67.6-44.8c22-17.6,41.1-34.8,57.1-51.8c16-17,31.6-35.3,46.7-54.9c15.1-19.6,27.2-36.4,36.1-50.4c8.9-14,17.3-27.9,25.2-41.8c-7.9-13.8-16.3-27.8-25.2-41.8c-8.9-14-20.9-30.8-36.1-50.4S806.1,370,790.1,353c-16-17-35-34.3-57.1-51.8c-22-17.6-44.6-32.5-67.6-44.8c-23-12.3-48.9-22.4-77.7-30.3C559,218.1,529.7,214.2,500,214.1L500,214.1z M500,336.6c45.1,0,83.6,15.9,115.5,47.8c31.9,31.9,47.8,70.4,47.8,115.5c0,45.1-15.9,83.6-47.8,115.5c-31.9,31.9-70.4,47.8-115.5,47.8c-45.1,0-83.6-15.9-115.5-47.8c-31.9-31.9-47.8-70.4-47.8-115.5c0-45.1,15.9-83.6,47.8-115.5C416.4,352.6,454.9,336.6,500,336.6z M500,418.4c-22.5,0-41.8,8-57.8,23.9c-16,16-23.9,35.2-23.9,57.8c0,22.5,8,41.8,23.9,57.8c16,16,35.2,23.9,57.8,23.9c22.5,0,41.8-8,57.8-23.9c16-16,23.9-35.2,23.9-57.8c0-22.5-8-41.8-23.9-57.8C541.8,426.3,522.5,418.4,500,418.4z" transform={transformValue}/>)
},
  build : (x,y,scale) => {
 const transformValue = `translate(${x},${y}),scale(${scale})`;
//export const buildSymbol = () => {
  return (
    <path d="m 313.699,314.8 14.399,14.8 -64.398,71.199 c -2.8,3 -7.8,3 -10.8,0 l -7.8,-8 c -3,-2.8 -3,-7.8 0,-10.8 L 313.699,314.8 z m 60.4,15.2 -10.8,11 c -2.2,2.2 -5.601,2.2 -8,0 l -2.4,-2.6 c -1.8,-1.6 -2.6,-4.6 -1.6,-6 1.8,-1.2 1.2,-4.8 -2.2,-8 -4.8,-5 -11,-5.2 -13.399,-2.6 -1,0.8 -4.2,4.2 -4.2,4.2 l -14.8,-14.6 2.4,-2.4 c 0,0 0.6,-0.6 1.8,-2 4.6,-4.6 -0.2,-9.8 -0.2,-9.8 -13,-12.8 -31.199,-12.6 -31.199,-12.6 l -0.2,-4.6 c 36.6,-9.4 50.399,6.6 55.399,11.6 4.6,4.6 9.399,9.399 10.6,10.6 2.6,2.6 0,10 3.8,14.2 1.8,1.8 4.2,2.6 6,2.6 2,-1.8 5.2,-1.2 6.8,0.6 l 2.2,2.4 c 2.199,2.2 2.199,5.6 -0.001,8 z"
  transform={transformValue}/>)
  }
}
