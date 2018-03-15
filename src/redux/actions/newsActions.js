import axios from 'axios'

export const fetch_news = (news) => ({
  type: 'NEWS_LIST',
  payload: {
    news
  }
})

export const get_news = (event) => {
  return async (dispatch, getState) => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=id&sortBy=publishedAt&apiKey=c578d45ef0a944e1bba270ac86463f0a`
      let API_CALL = await axios.get(url)

      let fetchNews = getState().newsReducers.news.concat(API_CALL.data.articles)
      dispatch(fetch_news(fetchNews))
    } catch (error) {
      console.error()
    }
  }
}