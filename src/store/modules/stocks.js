// load stock data
import stocks from "../../data/stocks";

const state = {
  stocks: []
};

const mutations = {
  // how do stocks need to change?
  // they need to be set
  // they need to be randomized
  SET_STOCKS(state, stocks) {
    state.stocks = stocks; // new stocks passed as an argument
  },
  RND_STOCKS(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  // buy a stock
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK", order); // commit mutation in portfolio file
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
