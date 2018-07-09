import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { SearchBar } from './components/searchbar';
import { VideoList } from './components/video-list';
import { VideoDetail } from './components/video-detail';

const API_KEY = 'AIzaSyCnvGiCGHO-NZF7vIrsu8mDbXCFhcG_9Y4';

YTSearch({key: API_KEY, term: 'billboard'}, (data) => {
	console.log(data)
});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [], 
			selectedVideo: null
		}	
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch( {key: API_KEY, term: term}, ( videos ) => {
			this.setState( {
				videos,
				selectedVideo: videos[0]
			} );
		} );
	}

  render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({ selectedVideo }) }
					videos={this.state.videos} />
			</div>
		);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);