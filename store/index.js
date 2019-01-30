import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      link: [
        {
          id: 1,
          title: 'Matt Tyas',
          subtitle: 'Principal designer at Co-op digital. Director of Manchester\'s Finest.',
          linktext: 'More about me',
          url: 'about',
          cssClass: 'mt-box--about',
          img: '/matt.svg'
        },
        {
          id: 2,
          subtitle: 'What I do',
          url: 'work',
          cssClass: 'mt-box--work'
        },
        {
          id: 3,
          subtitle: 'Week sketches',
          url: 'week-sketches',
          cssClass: 'mt-box--sketches'
        },
        {
          id: 4,
          subtitle: 'Writing',
          url: 'writing',
          cssClass: 'mt-box--writing'
        },
        {
          id: 5,
          subtitle: 'Contact',
          url: 'contact',
          cssClass: 'mt-box--contact'
        },
      ],
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      }
    }
  })
}

export default createStore
