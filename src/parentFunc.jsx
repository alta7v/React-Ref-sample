import React, {useRef} from "react"
import Child from "./childClass"
import {Child2} from "./child2"

export const Parent = () => {
  const ChildRef = useRef(null); // ←②React.createRef()で参照を作成


  // ③子コンポーネントのメソッドを実行するメソッドを親で作成
  const doClick = () => {
    ChildRef.current.getAlert(); // this.ref名.currentで実体にアクセス
  }
  const onClick = () => {
    alert('onClick!');
  }

  return (
    <div>
      <Child ref={ChildRef} /> {/** ←④子コンポーネントを呼び出し、refで参照する */}
      <button onClick={doClick}>click me</button> {/** ←⑤親で関数を実行 */}
      <Child2 onClick={onClick} />
    </div>
  );
}