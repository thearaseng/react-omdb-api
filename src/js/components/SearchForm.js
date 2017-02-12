var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores')

function getAppState(){
  return {
  }
}

var SearchForm = React.createClass({

  getInitialState:function(){
    return getAppState();
  },

  componentDidMount:function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUmount:function(){
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return(
      <div className="search-form">
        <h1 className="text-center">Search for Movies</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="title" placeholder="Enter a Movie title..." />
          </div>
          <button className="btn btn-primary btn-block">Search</button>
        </form>
      </div>
      )
  },

  onSubmit:function(e){
    e.preventDefault();
    var movie = {
      title: this.refs.title.value
    }
    AppActions.searchMovies(movie);
  },

  _onChange:function(){
    this.setState(getAppState());
  }

})

module.exports = SearchForm;
