import React from "react";

export default class ChatForm extends React.Component {
    render() {
        return (
            <div className="ChatForm">
                <div className="">
                    <input name='user_name' onChange={this.props.onTextChange} className="" placeholder="名前" />
                    <input name='profile_image' onChange={this.props.onTextChange} className="" placeholder="プロフィール画像URL" />
                </div>

                <textarea name='text' className="" onChange={this.props.onTextChange} />
                <button className="" onClick={this.props.onButtonClick}>送信</button>
            </div>
        );
    }
}