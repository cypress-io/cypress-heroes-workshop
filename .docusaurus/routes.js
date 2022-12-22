import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1b1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '43e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '38f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '4ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '48d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5e7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '96d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '318'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '0a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lab1',
        component: ComponentCreator('/lab1', 'c2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lab2',
        component: ComponentCreator('/lab2', '64b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lab3',
        component: ComponentCreator('/lab3', '251'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lab4',
        component: ComponentCreator('/lab4', 'fb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
