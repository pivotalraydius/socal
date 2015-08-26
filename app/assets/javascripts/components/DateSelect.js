var DateSelect = React.createClass({displayName: "Date1",
    getInitialState: function() {
        return {
            date: this.props.selected.clone(),
            time: 0

        };

    },


    render: function() {

        return React.createElement("span", this.state.date.clone());
    }


});