module.exports = [
    {
        text: '快速上手',
        link: '/guide/',
    },
    {
        text: '通用设计',
        link: '/design/',
    },
    {
        text: '组件',
        link: '/components/',
    },
    // NavbarGroup
    {
        text: '更多',
        children: ['yaleUI for React', 'yaleUI 核心'],
    },
    {
        text: 'V1.0 beta',
        children: [
            {
                text:'V1.0 beta',
                link:'',
                activeMatch: '^/components/',
            },
            {
                text:'V2.0 beta',
                link:''
            },
        ],
    },
]