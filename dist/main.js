var MarkdownPreviewer = React.createClass({
  displayName: "MarkdownPreviewer",

  getInitialState: function () {
    return { value: 'Type some *markdown* here!' };
  },
  rawMarkup: function () {
    return { __html: marked(this.state.value, { sanitize: true }) };
  },
  handleChange: function () {
    this.setState({ value: this.refs.textarea.value });
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(
          "h3",
          null,
          "Input"
        ),
        React.createElement("textarea", {
          ref: "textarea",
          rows: "22", type: "text",
          className: "form-control",
          onChange: this.handleChange,
          defaultValue: this.state.value })
      ),
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(
          "h3",
          null,
          "Output"
        ),
        React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup() })
      )
    );
  }
});

ReactDOM.render(React.createElement(MarkdownPreviewer, null), document.getElementById('container'));