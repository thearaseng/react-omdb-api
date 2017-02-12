var React = require('react');

var SearchForm = React.createClass({

  render: function(){
    return(
      <div className="search-form">
        <h1 className="text-center">Search for Movies</h1>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" ref="searchText" placeholder="Enter a Movie title..." />
          </div>
          <button className="btn btn-primary btn-block">Search</button>
        </form>
      </div>
      )
  }

})

module.exports = SearchForm;
