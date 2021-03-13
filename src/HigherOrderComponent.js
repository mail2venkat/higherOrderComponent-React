import React from "react";
import UserInfo from "./UserInfo";

const HigherOrderComponent = (WrappedComponent) => {
  return class EmployeeDetailComponents extends React.Component {
    constructor() {
      super();
      this.state = UserInfo();
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.state}></WrappedComponent>
        </div>
      );
    }
  };
};

export default HigherOrderComponent;
