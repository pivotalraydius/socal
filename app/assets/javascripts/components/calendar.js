var Calendar = React.createClass({
    displayName: "Create Event Calendar",

    getInitialState: function() {
        return {
            month: this.props.selected,
            calshouldHide: false,
            timeshouldShow: false,
            s_date1: '',
            date1flag: false   ,
            time: '',
            status: ''

        };

    },

    previous: function() {
        var month = this.state.month;
        month.add(-1, "M");
        this.setState({ month: month });
    },

    next: function() {
        var month = this.state.month;
        month.add(1, "M");
        this.setState({ month: month });
    },

    select: function(day) {
        this.props.selected = day.date;

        var d = day.date.format('D')
        var m = day.date.format('MMM')
        this.props.s_date1 = day.date

//        this.props.shouldHide = true;
        this.updateDates();
        this.forceUpdate();


    },

    handleToggle: function(){
        this.props.calshouldHide= false;
        this.props.timeshouldShow = false;
        this.props.time =  this.state.status


        this.forceUpdate();
    },

    updateDates: function(){

        this.props.calshouldHide= true;
        this.props.timeshouldShow = true;

    },

    onChanged: function (e) {
        this.setState({
            status: e.currentTarget.value
        });
    },


    renderWeeks: function() {
        var weeks = [],
            done = false,
            date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday"),
            monthIndex = date.month(),
            count = 0;


        while (!done) {
            weeks.push(React.createElement(Week, {key: date.toString(), date: date.clone(), month: this.state.month, select: this.select, selected: this.props.selected}));
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }

        return weeks;
    },

    renderMonthLabel: function() {
        return React.createElement("span", null, this.state.month.format("MMMM, YYYY"));
    },

    renderDateLabel: function() {
        return React.createElement("h2", {
            className: 'selectedDatelabel'
        }, this.props.selected.format("dddd, MM MMMM"));
    },

    selectdate1: function(){
        var date1 = this.props.s_date1;

        if (date1 === undefined || date1 === null) {
            //do something
            var dd =  moment().startOf("day") ;
            var d = dd.format('D')
        }else{
            var d = date1.format('D')
        }

        return d;
    },

    selectmonth1: function(){
        var date1 = this.props.s_date1;

        if (date1 === undefined || date1 === null) {
            //do something
            var dd =  moment().startOf("day") ;
            var d = dd.format('MMM')
        }else{
            var d = date1.format('MMM')
        }

        return d;
    },

    render: function() {
        return React.createElement("div", {className: ''},

            React.createElement("div", {
                    className: this.props.calshouldHide ? 'hidden' : 'calendar nohidden'
                },

                React.createElement("div", {className: "header"},
                    React.createElement("i", {className: "fa fa-angle-left", onClick: this.previous}),
                    this.renderMonthLabel(),
                    React.createElement("i", {className: "fa fa-angle-right", onClick: this.next})
                ),

                React.createElement(DayNames, null),
                this.renderWeeks()
            ),

            React.createElement("div", {
                    className: this.props.timeshouldShow ? 'nohidden timepicker' : 'hidden timepicker'
                },

                this.renderDateLabel() ,

                React.createElement("table",{className: 'table'}, null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("input",
                                {type: "radio", name: "status_name",
                                value: "all day",
                                checked: this.state.status === "all day",
                                onChange: this.onChanged,
                                width:"50%"}), "all day"),

                        React.createElement("td", null,
                            React.createElement("input", {
                                type: "radio", name: "status_name",
                                value: "same",
                                checked: this.state.status === "same",
                                onChange: this.onChanged,
                                width: "50%"}), "same time on all date")
                    )
                ) ,

                React.createElement("a",{
                    className: 'btn btn-warning' ,
                    onClick: this.handleToggle

                }, "Confirm"  )


            ),

             React.createElement("div",{className: "choose5dates_wrapper"},
                React.createElement("h4", {className: 'choseHeader'}, "Choose Up to 5 possible dates"),
                React.createElement("div", {className: 'ui-grid-d choose5dates'},
                    React.createElement("div", {className: 'ui-block-a'},
                        React.createElement(DayBox, {
                            type: 'success',
                            date: this.selectdate1(),
                            month: this.selectmonth1(),
                            time: this.props.time
                        })
                    ),

                    React.createElement("div", {className: 'ui-block-b'},
                        React.createElement("div", {className: 'circle_inactive', id: 'date2'},
                            React.createElement("span"), '2')),

                    React.createElement("div", {className: 'ui-block-c'},
                        React.createElement("div", {className: 'circle_inactive', id: 'date3'},
                            React.createElement("span"), '3')),

                    React.createElement("div", {className: 'ui-block-d'},
                        React.createElement("div", {className: 'circle_inactive' , id: 'date4'},
                            React.createElement("span"), '4')),

                    React.createElement("div", {className: 'ui-block-e'},
                        React.createElement("div", {className: 'circle_inactive', id: 'date5'},
                            React.createElement("span"), '5'))

                )

            )

        );
    }

});


var DayNames = React.createClass({displayName: "DayNames",
    render: function() {
        return React.createElement("div", {className: "week names"},
            React.createElement("span", {className: "day weekend"}, "sun"),
            React.createElement("span", {className: "day"}, "mon"),
            React.createElement("span", {className: "day"}, "tue"),
            React.createElement("span", {className: "day"}, "wed"),
            React.createElement("span", {className: "day"}, "thu"),
            React.createElement("span", {className: "day"}, "fri"),

            React.createElement("span", {className: "day weekend"}, "sat")
        );
    }
});

var Week = React.createClass({displayName: "Week",
    render: function() {
        var days = [],
            date = this.props.date,
            month = this.props.month;

        for (var i = 0; i < 7; i++) {
            var day = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };

            days.push(React.createElement("span",{
                key: day.date.toString(),
                className: "day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : ""),
                onClick: this.props.select.bind(null, day)
                }, day.number));

            date = date.clone();
            date.add(1, "d");

        }

        return React.createElement("div", {className: "week", key: days[0].toString()},
            days
        );
    }
});



var DayBox = React.createClass({
    render: function() {
        return React.createElement("div", null,
            React.createElement("div", {
                    className: 'circle',
                    id:"date1"},
                this.props.date),
            React.createElement("div", {
                    id:"month1"},
                this.props.month),
            React.createElement("div", {
                    id:"time1"},
                this.props.time)
        );

    }
});


