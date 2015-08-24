@EventForm = React.createClass
  getInitialState: ->
    title: ''
    place_name: ''
    content: ''

  render: ->
    React.DOM.div
      className: 'jumbotron center-block'
      React.DOM.h2
        className: 'title'
        'Create New Event'

      React.DOM.form

        React.DOM.label
        "Event Name"

        React.DOM.div
          className: 'form-group'
          React.DOM.input
            type: 'text'
            className: 'form-control'
            placeholder: 'Event Name'
            name: 'title'
            value: @state.title

        React.DOM.label
        "Location"
        React.DOM.div
          className: 'form-group'
          React.DOM.input
            type: 'text'
            className: 'form-control'
            placeholder: 'Location'
            name: 'place_name'
            value: @state.place_name
          React.DOM.span
            className: "glyphicon glyphicon-map-marker"


        React.DOM.label
        "Description"
        React.DOM.div
          className: 'form-group'
          React.DOM.textarea
            type: 'textarea'
            className: 'form-control'
            placeholder: 'Description'
            name: 'content'
            value: @state.content

        React.DOM.div
          className: 'form-group'
          React.DOM.div
            type: 'accordion'
            className: 'accordion'
            React.DOM.a
              className: 'accordion-toggle'
              "data-parent": "#accordion2"
              "data-toggle":  "collapse"
              href: "#collapseTwo"
              'Select Date max .5'
          React.DOM.div
            className: 'accordion-body collapse'
            id: 'collapseTwo'
            React.DOM.div
              className: 'accordion-inner'



        React.DOM.button
          type: 'submit'
          className: 'btn btn-default'
          'Create Event'