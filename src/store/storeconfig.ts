/* eslint-disable @typescript-eslint/no-explicit-any*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = {
  state: {
    postList: [],
    actionList: [],
  },
  getters: {
    getPostList(state: any){
      return state.postList;
    },
    getActionList(state: any){
      return state.actionList;
    }
  },
  mutations: {
    deletePost(state: any, id: number){
        const index = state.postList.findIndex((obj: any) => obj.id == id)
        state.postList.splice(index, 1);
    },

    addPostList(state: any, posts: any){
      state.postList = posts;
    },

    addActionLog(state: any, action: any){
      state.actionList.push(action);
    },
  },
  actions: {
    deletePost(context: any, data: number){
        context.commit('deletePost', data);
        const log = "post " + data + " deleted";
        context.commit('addActionLog', log);

    },

    addPostList(context: any, posts: any){
      context.commit('addPostList', posts);
    },
  },
  modules: {
  }
}

export default store