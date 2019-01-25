const packageJSON = require('../package.json');
const commander = require('commander');
const fs = require('fs')


function encode(val, prev) {
  val = quantize(val);
  val = val - prev;
  
  if (((val << 1) ^ (val >> 15)) + 64 === 8232) {
    val--;
  }
  val = (val << 1) ^ (val >> 15);
  return String.fromCharCode(val + 64);
}

function quantize(val) {
  return Math.ceil(val * 1024);
}


// 从Echarts提取的编码解码方法
function decodePolygon(coordinate, encodeOffsets) {
  let result = [];
  let prevX = encodeOffsets[0];
  let prevY = encodeOffsets[1];
  
  for (let i = 0; i < coordinate.length; i += 2) {
    let x = coordinate.charCodeAt(i) - 64;
    let y = coordinate.charCodeAt(i + 1) - 64;
    // ZigZag decoding
    x = (x >> 1) ^ (-(x & 1));
    y = (y >> 1) ^ (-(y & 1));
    // Delta deocding
    x += prevX;
    y += prevY;
    
    prevX = x;
    prevY = y;
    // Dequantize
    result.push([x / 1024, y / 1024]);
  }
  
  return result;
}

function encodePolygon(coordinate, encodeOffsets) {
  let result = '';
  
  let prevX = quantize(coordinate[0][0]);
  let prevY = quantize(coordinate[0][1]);
  encodeOffsets[0] = prevX;
  encodeOffsets[1] = prevY;
  
  for (let i = 0; i < coordinate.length; i++) {
    let point = coordinate[i];
    result += encode(point[0], prevX);
    result += encode(point[1], prevY);
    
    prevX = quantize(point[0]);
    prevY = quantize(point[1]);
  }
  
  return result;
}


commander
  .version(packageJSON.version)
  .option('-e, --encode', '加密')
  .option('-d, --decode', '解密')
  .option('-p, --path <name>', '文件路径')
  .option('-o, --out <name>', '输出路径')
  .parse(process.argv);

if (commander.decode) {
  const geo = require(commander.path)
  const features = geo.features
  features.forEach(feature => {
    let geometry = feature.geometry
    let coordinates = geometry.coordinates
    let encodeOffsets = geometry.encodeOffsets
    geometry.coordinates = coordinates.map((coordinate, index) => {
      if (Array.isArray(coordinate)) {
        return coordinate.map((coord, j) => {
          return decodePolygon(coord, encodeOffsets[index][j])
        })
      }
      return decodePolygon(coordinate, encodeOffsets[index])
    })
  })
  
  fs.writeFileSync(commander.out, JSON.stringify(geo), 'utf-8')
}


if (commander.encode) {
  const geo = require(commander.path)
  const features = geo.features
  features.forEach(feature => {
    let geometry = feature.geometry
    let coordinates = geometry.coordinates
    let encodeOffsets = geometry.encodeOffsets
    
    
    geometry.coordinates = coordinates.map((coordinate, index) => {
      if (Array.isArray(coordinate[0][0])) {
        return coordinate.map((coord, j) => {
          return encodePolygon(coord, encodeOffsets[index][j])
        })
      }
      return encodePolygon(coordinate, encodeOffsets[index])
    })
    
  })
  fs.writeFileSync(commander.out, JSON.stringify(geo), 'utf-8')
}

