let result = document.getElementById("result");
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    result.innerHTML = `It is a <span>Touch</span> device`;
  } catch (e) {
    result.innerHTML = `It is a <span>Mouse</span> device`;
  }
};
isTouchDevice();