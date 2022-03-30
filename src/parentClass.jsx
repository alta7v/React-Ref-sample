import React, {Component} from "react"
import Child from "./childClass"

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.ChildRef = React.createRef(); // ←②React.createRef()で参照を作成
    // this.doClick = this.doClick.bind(this);
  }

  // ③子コンポーネントのメソッドを実行するメソッドを親で作成
  doClick = () => {
    this.ChildRef.current.getAlert(); // this.ref名.currentで実体にアクセス
  }

  render() {
    return (
      <div>
        <Child ref={this.ChildRef} /> {/** ←④子コンポーネントを呼び出し、refで参照する */}
        <button onClick={this.doClick}>click me</button> {/** ←⑤親で関数を実行 */}
      </div>
    );
  }
}