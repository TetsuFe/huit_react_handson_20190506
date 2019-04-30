import React from "react";

export default class Message extends React.Component {

    render() {
        const style = {
            "item": {
                display: "flex",
                alignItems: "flex-end",
                marginBottom: "0.8em",
            },
            "itemImage": {
                width: "100px",
                objectFit: "contain",
                borderRadius: "20px",
                verticalAlign: "top",
            },
            "itemName": {
                fontSize: "75%"
            },
            "itemMessage": {
                position: "relative",
                display: "inline - block",
                padding: "0.8em",
                background: "#deefe8",
                borderRadius: "4px",
                lineHeight: "1.2em",
            }
        }

        return (
            <div className="Message" style={style.item}>
                <img style={style.itemImage} src={this.props.message.profile_image} />
                <div className="">
                    <p style={style.itemName}>@{this.props.message.user_name}</p>
                    <p style={style.itemMessage}>{this.props.message.text}</p>
                </div>
            </div>
        );
    }
}