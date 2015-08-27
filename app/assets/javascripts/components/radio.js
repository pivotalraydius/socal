
var SearchResult = React.createClass({displayName: "SearchResult",
    getInitialState: function () {
        return {
            site: '',
            address: ''
        };
    },
    onSiteChanged: function (e) {
        this.setState({
            site: e.currentTarget.value
        });
    },

    onAddressChanged: function (e) {
        this.setState({
            address: e.currentTarget.value
        });
    },

    render: function(){
        var resultRows = this.props.data.map(function(result){
            return (
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, React.createElement("input", {type: "radio", name: "site_name",
                            value: result.SITE_NAME,
                            checked: this.state.site === result.SITE_NAME,
                            onChange: this.onSiteChanged}), result.SITE_NAME),
                        React.createElement("td", null, React.createElement("input", {type: "radio", name: "address",
                            value: result.ADDRESS,
                            checked: this.state.address === result.ADDRESS,
                            onChange: this.onAddressChanged}), result.ADDRESS)
                    )
                )
                );
        }, this);
        return (
            React.createElement("table", {className: "table"},
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Address")
                    )
                ),
                resultRows,
                React.createElement("tfoot", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "chosen site name ", this.state.site, " "),
                        React.createElement("td", null, "chosen address ", this.state.address, " ")
                    )
                )
            )
            );
    }
});

var App = React.createClass({displayName: "App",
    render: function(){
        return React.createElement("div", null, React.createElement(SearchResult, {data: [
            {SITE_NAME: 'google.com', ADDRESS: 'Mountain View, CA'},
            {SITE_NAME: 'example.com', ADDRESS: 'Example Place, CA'}
        ]}))
    }
});

React.render(React.createElement(App, null), document.body);