import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      link: [
        {
          id: 1,
          title: 'Matt Tyas',
          subtitle: 'Service and interaction design. Product, team management and frontend engineering.',
          linktext: 'More about me',
          url: 'about',
          cssClass: 'mt-box--about',
          profileImg: '/matt.svg',
          cssImgClass: 'mt-portrait',
          profileLink: 'More about me',
          profileLinkCssClass: 'mt-more'
        },
        {
          id: 2,
          subtitle: 'Work',
          url: 'work',
          cssClass: 'mt-box--work',
          coopImg: '/coop-logo-white.svg',
          coopJob: 'Principal Designer',
          finestImg: '/manchesters-finest.svg',
          finestJob: 'Director'
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
