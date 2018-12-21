import React, { Component } from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-jsonschema-form";

const uiSchema = {
	user: { "ui:placeholder": "USERNAME" },
	password: { "ui:widget": "password", "ui:placeholder": "PASSWORD" }
};

const schema = {
	type: "object",
	properties: {
	user: { type: "string", title: " "},
	password: { type: "string", title: " "}
	}
};

const log = (type) => console.log.bind(console, type);

render((
	<Form schema={schema}
	uiSchema={uiSchema}
	onChange={log("changed")}
	onSubmit={log("submitted")}
	onError={log("errors")} />
), document.getElementById("santa"));