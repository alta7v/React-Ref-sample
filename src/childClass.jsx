import React, {Component} from "react"

export default class Child extends Component {

  // ①親で実行するメソッドを子コンポーネントで用意
  getAlert() {
    alert('getAlert worked!');
  }

  render() {
    return <h1>click button!</h1>;
  }
}