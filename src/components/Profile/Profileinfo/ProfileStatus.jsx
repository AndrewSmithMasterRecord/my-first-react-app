import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: ''
    };

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    };

    editModeSet = () => {
        let userId = this.props.match.params.userId;
        if (userId === undefined || userId === String(this.props.authId))
            this.setState({
                editMode: true
            });
    };

    editModeClear = () => {
        let status = this.state.status ? this.state.status : 'None';
        this.setState({
            editMode: false
        });
        this.props.putStatus(status);
    };

    onChange = (elem) => {
        let value = elem.target.value;
        this.setState({status: value})
    };

    render() {
        return (
            <div>
                {!this.state.editMode && <span onDoubleClick={this.editModeSet}>
                    {this.props.status}
                </span>}
                {this.state.editMode && <input onBlur={this.editModeClear}
                                               autoFocus={true}
                                               value={this.state.status}
                                               onChange={this.onChange}/>}
            </div>
        )
    }

}

export default ProfileStatus;