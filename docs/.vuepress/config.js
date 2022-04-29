module.exports = {
    title: '校园生活不完全指南🧰',
    description: 'Just playing around',
    base: '/',

    // 主题设置
    themeConfig: {
        // 导航栏
        nav: [
        //   { text: '指南', link: '/guide/' },
          { text: 'GitHub', link: 'https://github.com/duan-1/hnit-help' },
        ],
        // 侧边栏
        sidebar: [
            {
                title: '开始',   // 必要的
                collapsable: false, // 可选的，默认值是 true,
                sidebarDepth: 1,    // 可选的，默认值是 1
                children: [
                    '/guide/'                    
                ]
            },
            {
                title: '校园设施',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    'guide/campus-network'
                ]
            }
        ],
        // 最后更新时间
        lastUpdated: '最后更新于'
    }

    // 插件设置

    
}
