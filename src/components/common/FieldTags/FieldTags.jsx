import React from "react";
import style from "./FieldTags.module.css"


export const FieldTagCreator = Tag => ({input, meta, ...props}) => {
    debugger
    let error = meta.error && meta.touched && style.fielderror;
    return (
        <div className={error}>
            <Tag {...input} {...props} />
            {error && <span> {meta.error} </span>}
        </div>
    )
};
