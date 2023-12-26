import ErrorCard from 'components/ErrorCard/ErrorCard';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { fetchNews } from 'services/getNews';

const LOADING_STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

class ContentInfo extends Component {
  state = {
    news: null,
    error: '',
    loadingStatus: LOADING_STATUS.IDLE,
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ loadingStatus: LOADING_STATUS.PENDING });
      fetchNews(this.props.searchText)
        .then(res => res.json())
        .then(data => {
          if (data.status === 'ok') {
            this.setState({
              news: data.articles,
              loadingStatus: LOADING_STATUS.RESOLVED,
            });
          } else {
            return Promise.reject(data.message);
          }
        })
        .catch(error => {
          this.setState({ error, loadingStatus: LOADING_STATUS.REJECTED });
        });
    }
  }

  render() {
    const { news, error } = this.state;

    if (this.state.loadingStatus === LOADING_STATUS.PENDING) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    } else if (this.state.loadingStatus === LOADING_STATUS.RESOLVED) {
      return (
        <ul>
          {news &&
            news.map(elem => {
              return <li key={nanoid()}>{elem.title}</li>;
            })}
        </ul>
      );
    } else if (this.state.loadingStatus === LOADING_STATUS.REJECTED) {
      setTimeout(() => {
        this.setState({ loadingStatus: LOADING_STATUS.IDLE });
      }, 3000);
      return <ErrorCard>{error}</ErrorCard>;
    }
  }
}

export default ContentInfo;
