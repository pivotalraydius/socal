@Login = React.createClass

  getInitialState: ->
    username: ''
    email: ''

  render: ->
    React.DOM.div
      className: 'jumbotron center-block'
      React.DOM.h2
        className: 'title'
        'Welcome to Social Calendar'
      React.DOM.h5
        className: 'title'
        'Login'
      React.DOM.form
        onSubmit: @handleSubmit
        React.DOM.div
          className: 'form-group'
          React.DOM.input
            type: 'text'
            className: 'form-control'
            placeholder: 'username'
            name: 'username'
            value: @state.username
            onChange: @handleChange

        React.DOM.div
          className: 'form-group'
          React.DOM.input
            type: 'password'
            className: 'form-control'
            placeholder: 'Password'
            name: 'password'
            value: @state.password
            onChange: @handleChange

        React.DOM.button
          type: 'submit'
          className: 'btn btn-success'
          'Login'
