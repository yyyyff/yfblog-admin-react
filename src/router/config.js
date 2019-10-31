import {lazy} from 'react'
const loadComponent =(name) => (
  lazy(()=>import(`@/views/${name}`))
)

export const Menus = [
  {
    path: '/dashboard',
    title:'控制台',
    icon: 'dashboard',
    component: lazy(()=>import('@/views/Dashboard'))
  },
  {
    path: '/article',
    title:'文章管理',
    icon: 'project',
    subMenu: [
      {
        path: '/article/list',
        title: '文章列表',
        icon: 'bars',
        component: loadComponent('ArticleList')
      },
      {
        path: '/article/edit',
        title: '添加文章',
        icon: 'edit',
        component:loadComponent('ArticleEdit')
      }
    ]
  },
  {
    path: '/page',
    title: '独立页面',
    icon: 'project',
    subMenu: [
      {
        path: '/page/list',
        title: '管理页面',
        icon: 'bars',
        component: loadComponent('PageList')
      },
      {
        path: '/page/edit',
        title: '添加页面',
        icon: 'edit',
        component:loadComponent('PageEdit')
      }
    ]
  },
  {
    path: '/tag',
    title: '标签管理',
    icon: 'tags',
    component: loadComponent('Tags')
  },
  {
    path: '/category',
    title: '分类管理',
    icon: 'read',
    component: loadComponent('Category')
  },
  {
    path: '/comment',
    title: '评论管理',
    icon: 'message',
    component: loadComponent('Comments')
  },
  {
    path: '/settings',
    title: '个人设置',
    icon: 'setting',
    component: loadComponent('Settings')
  }
]