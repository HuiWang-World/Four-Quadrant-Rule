import React from 'react'
import ReactDOM from 'react-dom/client'
import Native from './Native'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Native />
  </React.StrictMode>,
)

// 屏蔽鼠标右键菜单
document.oncontextmenu = function () {
    return false;
};
// 阻止右键菜单的默认行为
document.oncontextmenu=function (e){
    e.preventDefault();
}