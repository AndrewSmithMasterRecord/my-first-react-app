import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode, editModeSet] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {setStatus(props.status)}, [props.status]);

    const editModeClear = () => {
        let newValue = status ? status : 'None';
        editModeSet(false);
        props.putStatus(newValue);
    };
    const onChange = (e) => {
        setStatus(e.target.value);
    };
    const click = () => {
        let userId = props.match.params.userId;
        if (userId === undefined || userId === String(props.authId))
            editModeSet(true);
    };
    return (
        <div>
            {!editMode && <span onDoubleClick={click}>
                    {props.status}
                </span>}
            {editMode && <input onBlur={editModeClear}
                                autoFocus={true}
                                value={status}
                                onChange={onChange}/>}
        </div>
    )
};
export default ProfileStatusWithHooks