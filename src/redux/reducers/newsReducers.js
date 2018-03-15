const initialSatte = {
  news: []
}

const newsReducers = (state=initialSatte, action) => {
  switch (action.type) {
    case 'NEWS_LIST':
      
      return {...state, news: action.payload.news}
    default:
    return state
  }
}

export default newsReducers