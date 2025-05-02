const CONFIG = {
  HEXO_HOME_BANNER_ENABLE: true,
  // 3.14.1以后的版本中，欢迎语在blog.config.js中配置，用英文逗号','隔开多个。
  HEXO_HOME_BANNER_GREETINGS: [
    'Hi，我是一个程序员',
    'Hi，我是一个打工人',
    'Hi，我是一个干饭人',
    '欢迎来到我的博客🎉'
  ], // 首页大图标语文字

  HEXO_HOME_NAV_BUTTONS: true, // 首页是否显示分类大图标按钮
  // 已知未修复bug, 在移动端开启true后会加载不出图片； 暂时建议设置为false。
  HEXO_HOME_NAV_BACKGROUND_IMG_FIXED: false, // 首页背景图滚动时是否固定，true 则滚动时图片不懂动； false则随鼠标滚动 ;
  // 是否显示开始阅读按钮
  HEXO_SHOW_START_READING: true,

  // 菜单配置
  HEXO_MENU_INDEX: true, // 显示首页
  HEXO_MENU_CATEGORY: true, // 显示分类
  HEXO_MENU_TAG: true, // 显示标签
  HEXO_MENU_ARCHIVE: true, // 显示归档
  HEXO_MENU_SEARCH: true, // 显示搜索
  HEXO_MENU_RANDOM: true, // 显示随机跳转按钮

  HEXO_POST_LIST_COVER: true, // 列表显示文章封面
  HEXO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEXO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEXO_POST_LIST_SUMMARY: true, // 文章摘要
  HEXO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEXO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEXO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEXO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEXO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEXO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEXO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEXO_WIDGET_TO_TOP: true,
  HEXO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEXO_WIDGET_DARK_MODE: true, // 夜间模式
  HEXO_WIDGET_TOC: true, // 移动端悬浮目录

  // 现代化美观设置
  HEXO_MODERN_DESIGN: true, // 启用现代化设计
  HEXO_CARD_BORDER_RADIUS: '1rem', // 卡片圆角
  HEXO_FROSTED_GLASS: true, // 启用毛玻璃效果
  HEXO_GLASSMORPHISM: true, // 玻璃态设计
  HEXO_ANIMATION_ENABLE: true, // 启用动画效果
  HEXO_HOVER_SHADOW: true, // 鼠标悬停阴影
  HEXO_IMAGE_SHADOW: true, // 图片阴影效果
  HEXO_POST_HOVER_SCALE: true, // 文章卡片悬停放大效果

  // 社交媒体链接
  HEXO_TELEGRAM_LINK: 'https://t.me/NekoMirra', // Telegram链接
  HEXO_PERSONAL_SITE: 'https://mirradev.eu.org/' // 个人主页链接
}
export default CONFIG
