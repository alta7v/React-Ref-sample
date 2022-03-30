import React from "react"

export const Child = () => {

  // ①親で実行するメソッドを子コンポーネントで用意
  const getAlert = () => {
    alert('getAlert worked!');
  }

  return <h1>click button!</h1>;
}