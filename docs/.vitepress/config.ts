import {defineConfig} from 'vitepress'

export default defineConfig({
    /**
     * Meta lang tag.
     */
    lang: 'ru-RU',

    /**
     * Meta title tag.
     */
    title: 'VueComponents.ru',

    /**
     * Meta description tag.
     */
    description: 'kek',

    /**
     * Use git commit to get the timestamp. This option enables the default theme to display the page's last updated
     * time. You can customize the text via themeConfig.lastUpdatedText option.
     */
    lastUpdated: true,

    markdown: {
        lineNumbers: true
    },

    head: [
        ['script', { src: '/js/metrika.js', type: 'text/javascript'}]
    ],


    /**
     * Default theme configuration
     */
    themeConfig: {
        nav: [
            {text: 'О проекте', link: '/pages/about'},
            {text: 'Лицензирование', link: '/pages/license'},
        ],

        sidebar: [
            {
                text: 'Компоненты',
                collapsible: true,
                items: [
                    {text: 'switch', link: 'components/switch'},
                    // { text: 'Кастомный инпут', link: 'components/custom-input' },
                    // { text: 'Кастомный чекбокс', link: 'components/custom-checkbox' },
                    // { text: 'Кастомные радиокнопки', link: 'components/custom-radio' },
                ]
            },
            // {
            //     text: 'Гайды',
            //     collapsible: true,
            //     items: [
            // This shows `/guide/index.md` page.
            // { text: 'Introduction', link: '/new' }
            // ]
            // },
        ],

        editLink: {
            text: 'Edit this page on GitHub',
            pattern: 'https://github.com/danielvinogradov/vue-components/edit/master/docs/:path'
        },

        footer: {
            // message: 'some message',
            copyright: 'Copyright © 2022-present Danil Vinogradov'
        }
    }
})
