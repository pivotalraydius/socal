
var Result = React.createClass({displayName: "Result",
    getInitialState: function () {
        return {
            status: ''
        };
    },
    onChanged: function (e) {
        this.setState({
            status: e.currentTarget.value
        });
    },

    handleToggle: function(e){
        e.preventDefault()
        alert('ok')
    },

    render: function(){
        var resultRows = this.props.data.map(function(result){
            return (
                React.createElement("td", null, React.createElement("input", {
                    type: "radio",
                    name: "site_name",
                    value: result.time_name,
                    checked: this.state.status === result.time_name,
                    onChange: this.onChanged}), result.time_name)
                );
        }, this);
        return (
            React.createElement("table", {className: "table"},
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, React.createElement("input", {
                            type: "radio",
                            name: "site_name",
                            value: result.time_name,
                            checked: this.state.status === result.time_name,
                            onChange: this.onChanged}), result.time_name),

                        React.createElement("td", null, React.createElement("input", {
                            type: "radio",
                            name: "site_name",
                            value: result.time_name,
                            checked: this.state.status === result.time_name,
                            onChange: this.onChanged}), result.time_name)
                    )
                ),

                React.createElement("tfoot", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "chosen ", this.state.status, " ")
                    )


                    )
                )
            )

            ;
    }
});

var TimeRadio = React.createClass({displayName: "TimeRadio",
    render: function(){
        return React.createElement("div", null, React.createElement(Result, {data: [
            {time_name: 'all-day'},
            {time_name: 'same time on all dates'}
        ]}))
    }
});

