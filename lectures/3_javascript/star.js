'use strict';

//직접 풀어본 별그리기 퀴즈!
window.onload = function () {
  /*
  -'*'       document.write('*');
  -개행       document.write('<br>'); 
  -space     document.write('&nbsp');
  -가로선     document.write('<hr>');
  */
  //
  /*
  1] 정사각형
  *****
  *****
  *****
  *****
  *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
  2] 삼각형
  *
  **
  ***
  ****
  *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      document.write('*');
    }
    document.write('&nbsp');
    document.write('<br>');
  }
  document.write('<hr>');
  /*
  3] 삼각형-reverse
  *****
  ****
  ***
  **
  *
  */
  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      document.write('*');
    }
    document.write('&nbsp');
    document.write('<br>');
  }

  document.write('<hr>');
  /*
  4] 삼각형2
       *
      **
     ***
    ****
   *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      document.write('&nbsp');
    }
    for (let k = 0; k < i + 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
};
