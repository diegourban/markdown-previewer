var MarkdownPreviewer = React.createClass({
  getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
  },
  rawMarkup: function() {
    return { __html: marked(this.state.value, {sanitize: true}) };
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.value});
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Input</h3>
          <textarea
            ref="textarea"
            rows="22" type="text"
            className="form-control"
            onChange={this.handleChange}
            defaultValue={this.state.value}/>
        </div>

        <div className="col-md-6">
          <h3>Output</h3>
          <span dangerouslySetInnerHTML={this.rawMarkup()}/>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<MarkdownPreviewer/>, document.getElementById('container'));
