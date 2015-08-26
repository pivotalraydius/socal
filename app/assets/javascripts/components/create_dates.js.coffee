#@Calendar = React.createClass
#  getInitialState: ->
#    month: moment().startOf('day')
#    shouldHide: @props.shouldHide
#
#  renderMonthLabel: -> React.createElement 'span', null, @state.month.format('MMMM, YYYY')
#
#  previous: ->
#    month = @state.month
#    month.add -1, 'M'
#    @setState month: month
#
#  next: ->
#    month = @state.month
#    month.add 1, 'M'
#    @setState month: month
#
#  renderWeeks: ->
#    weeks = []
#    done = false
#    date = @state.month.clone().startOf('month').add('w' - 1).day('Sunday')
#    monthIndex = date.month()
#    count = 0
#    while !done
#      weeks.push React.createElement(Week,
#        key: date.toString()
#        date: date.clone()
#        month: @state.month
#        select: @select
#        selected: @props.selected)
#      date.add 1, 'w'
#      done = count++ > 2 and monthIndex != date.month()
#      monthIndex = date.month()
#    weeks
#
#  select: (day) ->
#    @props.selected = day.date
#    d = day.date.format('D')
#    m = day.date.format('MMM')
#    console.log d
#    console.log m
#    #        this.props.shouldHide = true;
#    @forceUpdate()
#
#  render: ->
#    React.DOM.div
#      className: 'ui-content'
#      role: 'main'
#      React.DOM.div
#        id: 'topic_title'
#        "Dinner wtih Classmates for No reason"
#
#      React.DOM.div
#        React.DOM.div
#          id: 'calendar'
#          React.DOM.div
#            className: 'header'
#            React.DOM.i
#              className: 'fa fa-angle-left'
#              onClick: @previous
#
#            @renderMonthLabel
#
#            React.DOM.i
#              className: 'fa fa-angle-right'
#              onClick: @next
#
##            React.createElement(DayNames, null)
#            @renderWeeks
#
#
#@DayNames = React.createClass
#  displayName: 'DayNames'
#  render: ->
#    React.createElement 'div', { className: 'week names' },
#      React.createElement('span', { className: 'day' }, 'mon'),
#      React.createElement('span', { className: 'day' }, 'tue'),
#      React.createElement('span', { className: 'day' }, 'wed'),
#      React.createElement('span', { className: 'day' }, 'thu'),
#      React.createElement('span', { className: 'day' }, 'fri'),
#      React.createElement('span', { className: 'day weekend' }, 'sat'),
#      React.createElement('span', { className: 'day weekend' }, 'sun')
#
#@Week = React.createClass
#  displayName: 'Week'
#  render: ->
#    days = []
#    date = @props.date
#    month = @props.month
#    i = 0
#    while i < 7
#      day =
#        name: date.format('dd').substring(0, 1)
#        number: date.date()
#        isCurrentMonth: date.month() == month.month()
#        isToday: date.isSame(new Date, 'day')
#        date: date
#      days.push React.createElement('span', {
#        key: day.date.toString()
#        className: 'day' + (if day.isToday then ' today' else '') + (if day.isCurrentMonth then '' else ' different-month') + (if day.date.isSame(@props.selected) then ' selected' else '')
#        onClick: @props.select.bind(null, day)
#      }, day.number)
#      date = date.clone()
#      date.add 1, 'd'
#      i++
#    React.createElement 'div', {
#      className: 'week'
#      key: days[0].toString()
#    }, days
