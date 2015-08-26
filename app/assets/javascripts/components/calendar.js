var Calendar = React.createClass({displayName: "Calendar",
    getInitialState: function() {
        return {
            month: this.props.selected.clone()
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
        this.forceUpdate();
    },

    render: function() {
        return React.createElement("div", null,
//            React.createElement("div", {className: "header"},
//                React.createElement("i", {className: "fa fa-angle-left", onClick: this.previous}),
//                this.renderMonthLabel(),
//                React.createElement("i", {className: "fa fa-angle-right", onClick: this.next})
//            ),
            React.createElement(DayNames, null),
            this.renderWeeks()
        );
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
});

var DayNames = React.createClass({displayName: "DayNames",
    render: function() {
        return React.createElement("div", {className: "week names"},
            React.createElement("span", {className: "day"}, "mon"),
            React.createElement("span", {className: "day"}, "tue"),
            React.createElement("span", {className: "day"}, "wed"),
            React.createElement("span", {className: "day"}, "thu"),
            React.createElement("span", {className: "day"}, "fri"),
            React.createElement("span", {className: "day weekend"}, "sat"),
            React.createElement("span", {className: "day weekend"}, "sun")
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
            days.push(React.createElement("span", {key: day.date.toString(), className: "day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : ""), onClick: this.props.select.bind(null, day)}, day.number));
            date = date.clone();
            date.add(1, "d");

        }

        return React.createElement("div", {className: "week", key: days[0].toString()},
            days
        );
    }
});

