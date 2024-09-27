import React from 'react';

class SearchTerms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchGenreId: '',
      searchLangId: '',
      sortById: '',
      searchOnRunTime: '',
      searchOffRunTime: '',
      searchOnRelease: '',
      searchOffRelease: '',
    };
  };

  onChange = (e) => {
    if (e.currentTarget.id === "searchbar") { this.setState({ searchTerm: e.target.value }); }
    if (e.currentTarget.id.includes('searchGenre')) { this.setState({ searchGenreId: e.target.id }); }
    if (e.currentTarget.id.includes('searchLang')) { this.setState({ searchLangId: e.target.id }); }
    if (e.currentTarget.id.includes('sortBy')) { this.setState({ sortById: e.target.id }); }
    if (e.currentTarget.id.includes('searchOnRunTime')) { this.setState({ searchOnRunTime: e.target.value }); }
    if (e.currentTarget.id.includes('searchOffRunTime')) { this.setState({ searchOffRunTime: e.target.value }); }
    if (e.currentTarget.id.includes('searchOnRelease')) { this.setState({ searchOnRelease: e.target.value }); }
    if (e.currentTarget.id.includes('searchOffRelease')) { this.setState({ searchOffRelease: e.target.value }); }
  };
};
export default SearchTerms;