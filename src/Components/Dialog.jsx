import React from 'react';



const Dialog = (props) => {

  let dialog = (
    <>
    <div className="dialog-background" onClick={props.closeWindow}>
    </div>
      <div className="dialog-body">
        <div>{props.children}</div>
      </div>
    </>
  );

  if (props.isOpen) {
    return (
      <div>
        {dialog}
      </div>
    )
  }
}


export default Dialog;