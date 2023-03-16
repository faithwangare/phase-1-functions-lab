// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const hq = 42;
    return Math.abs(block - hq);
  }
  
  function distanceFromHqInFeet(block) {
    const blockDistance = distanceFromHqInBlocks(block);
    return blockDistance * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    const distance = Math.abs(end - start) * 264;
    return distance;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }