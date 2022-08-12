module.exports = function check(str, bracketsConfig) {
  let sl = str.length;
  let trueorfalse = true;
  do {
    for (let i = 0; i < bracketsConfig.length; i++) {
      let tof = true;
      let strlength = str.length;
      do {
        str=str.replace(bracketsConfig[i][0]+bracketsConfig[i][1],'');
        if ((str.length == strlength) || (str.length == 0)) tof = false;
        strlength = str.length;
      } while (tof);
    }
    if ((str.length == sl) || (str.length == 0)) trueorfalse = false;
    sl = str.length;
  } while (trueorfalse);
  return (str == '');
}