var canvas = document.getElementById("canvas-practice")
var ctx = canvas.getContext("2d")

console.log(canvas)

// X, Y, width, height
ctx.fillStyle = "yellow"
ctx.fillRect(100, 100, 400, 400)

ctx.fillStyle = "orange"
ctx.fillRect(120, 120, 360, 360)

ctx.fillStyle = "white"
ctx.fillRect(140, 140, 320, 320)

function toRadians(degrees) {
  return degrees * Math.PI/180
}

ctx.beginPath()
// x, y, radius, 0, radian/pi
ctx.fillStyle = "red"
ctx.arc(285, 270, 12, 0, toRadians(360))
ctx.fill()
ctx.closePath()


ctx.beginPath()
// x, y, radius, 0, radian/pi
ctx.fillStyle = "red"
ctx.arc(305, 400, 12, 0, toRadians(360))
ctx.fill()
ctx.closePath()