import { useSelector } from "react-redux";
import { selectorUtility } from "../../reduxStore";
import React from 'react'
const Button = (props) => {
  const isLoading = useSelector(selectorUtility.loading);

  const { icon, title, onClick, disabled, loading, type, color, block, className } = props;

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`btn btn-${color} ${block === undefined ? "" : "btn-block"} ${className === undefined ? "" : className}`}
    >
      {loading ? (
        isLoading.button ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> &nbsp; {textLoading}
          </>
        ) : (
          title || <i className={`fas ${icon}`}></i>
        )
      ) : (
        title || <i className={`fas ${icon}`}></i>
      )}
    </button>
  );
};

export default Button;
