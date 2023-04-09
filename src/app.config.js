export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/me/index',
    'pages/Detail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#999999",
    "selectedColor": "#007aff",
    "backgroundColor": "#ffffff",
    "borderStyle": "black",
    "fontSize": "20px",
    list: [
      {
        pagePath: 'pages/index/index',
        text: '主页',
      },
      {
        pagePath: 'pages/me/index',
        text: '我的',
      },
    ],
  },
})
