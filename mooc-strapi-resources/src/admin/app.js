export default {
  config: {
    auth: {
      logo: '/logo.svg',
    },
    locales: ['zh-Hans', 'zh'],
    translations: {
      en: {
        'Auth.form.welcome.subtitle': 'Log in to your account',
        'app.components.LeftMenu.navbrand.title': 'Dashboard',
      },
      zh: {
        'Auth.form.welcome.subtitle': '登入你的帳號',
        'app.components.LeftMenu.navbrand.title': '控制台',
      },
      'zh-Hans': {
        'Auth.form.welcome.subtitle': '登录您的账户',
        'app.components.LeftMenu.navbrand.title': '控制台',
      },
    },
    menu: {
      logo: '/logo.svg',
    },
    // theme: {
    //   colors: {
    //     primary100: '#8498D3',
    //     primary200: '#5870B9',
    //     primary500: '#3B56A5',
    //     primary600: '#1E3D9B',
    //     primary700: '#132C76',
    //   }
    // }
  },
  bootstrap(app) {},
}
