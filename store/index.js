import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      link: [
        {
          id: 1,
          title: 'Matt Tyas',
          subtitle: 'Service and interaction design. Product, team management and front-end engineering.',
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
          workImg: '/matt-work.svg',
          workcssImgClass: 'mt-work-portrait'
        },
        {
          id: 3,
          subtitle: 'Writing',
          url: 'writing',
          cssClass: 'mt-box--writing',
          writingImg: '/matt-sketch.svg',
          writingCssImgClass: 'mt-sketch-portrait'
        },
        {
          id: 4,
          subtitle: 'Contact',
          url: 'contact',
          cssClass: 'mt-box--contact',
          contactImg: '/phone.svg',
          contactCssImgClass: 'mt-sketch-phone'
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
