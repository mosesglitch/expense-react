import React from "react";

var cTime = new Date().toTimeString();
class HelloWorld extends React.Component {
  render() {
    function getCurrentTime() {
      return new Date().toTimeString();
    }
    return (
      <div>
        <h1>Hello World!</h1>
        <p>
          <div>
            <p>
              The current time is{" "}
              <span className="red">{getCurrentTime()}</span>
            </p>
          </div>
          <p>{5 * 50 + 22}</p>
        </p>
      </div>
    );
  }
}
export default HelloWorld;
