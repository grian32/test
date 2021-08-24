export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export enum PixelFormat {
  Unknown = 0,
  Index1LSB = 286261504,
  Index1MSB = 287310080,
  Index4LSB = 303039488,
  Index4MSB = 304088064,
  Index8 = 318769153,
  RGB332 = 336660481,
  XRGB4444 = 353504258,
  XBGR4444 = 357698562,
  XRGB1555 = 353570562,
  XBGR1555 = 357764866,
  ARGB4444 = 355602434,
  RGBA4444 = 356651010,
  ABGR4444 = 359796738,
  BGRA4444 = 360845314,
  ARGB1555 = 355667970,
  RGBA5551 = 356782082,
  ABGR1555 = 359862274,
  BGRA5551 = 360976386,
  RGB565 = 353701890,
  BGR565 = 357896194,
  RGB24 = 386930691,
  BGR24 = 390076419,
  XRGB8888 = 370546692,
  RGBX8888 = 371595268,
  XBGR8888 = 374740996,
  BGRX8888 = 375789572,
  ARGB8888 = 372645892,
  RGBA8888 = 373694468,
  ABGR8888 = 376840196,
  BGRA8888 = 377888772,
  ARGB2101010 = 372711428,
  YV12 = 842094169,
  IYUV = 1448433993,
  YUY2 = 844715353,
  UYVY = 1498831189,
  YVYU = 1431918169,
}
