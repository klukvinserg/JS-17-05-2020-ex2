let tmp = 0;
let temp = 0;
let tmpTwo = 0;
let tempThree = 0;
let tmpFour = 0;

function myActionOne() {
  if (tmp === 0) {
    localCInner.style.display = "block";
    localDInner.style.display = "block";
    localEInner.style.display = "block";
    tmp = 1;
  } else if (tmp === 1) {
    localCInner.style.display = "none";
    localDInner.style.display = "none";
    localEInner.style.display = "none";
    localCInnerList.style.display = "none";
    localDInnerList.style.display = "none";
    localEInnerList.style.display = "none";
    tmp = 0;
  }
}

function myActionTwo() {
  if (tmpTwo === 0) {
    localCInnerList.style.display = "block";
    tmpTwo = 1;
  } else if (tmpTwo === 1) {
    localCInnerList.style.display = "none";
    tmpTwo = 0;
  }
}

function myActionThree() {
  if (tempThree === 0) {
    localDInnerList.style.display = "block";
    tempThree = 1;
  } else if (tempThree === 1) {
    localDInnerList.style.display = "none";
    tempThree = 0;
  }
}

function myActionFour() {
  if (tmpFour === 0) {
    localEInnerList.style.display = "block";
    tmpFour = 1;
  } else if (tmpFour === 1) {
    localEInnerList.style.display = "none";
    tmpFour = 0;
  }
}
