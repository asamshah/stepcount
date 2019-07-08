
const data = [2, 4, 6, 10, 
              2, 1, 1, 10, 
              14, 12, 5, 2, 
              1, 11, 9, 8, 
              6, 1, 2, 12, 
              15, 10, 9, 14]

const todaySvg = document.querySelector("svg")

data.forEach((d, i) => {
  // add rect tag to todaySvg
  const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect")
  rectTag.setAttribute("x", i * 36)
  rectTag.setAttribute("y", 112 - d)
  rectTag.setAttribute("width", 24)
  rectTag.setAttribute("width", d)
  
  todaySvg.append(rectTag)
})








