

function a() {
  console.log('hello');
}

// javascript is non blocking
// javascript runs to completeion
setTimeout(a, 3000);
console.log('world');
