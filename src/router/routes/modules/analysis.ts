import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const about: AppRouteModule = {
  path: '/',
  name: 'Analysis',
  component: LAYOUT,
  redirect: '/dashboard',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '运营分析中心',
  },
  children: [
    {
      path: 'dashboard',
      name: 'Analysis',
      component: () => import('/@/views/kanban/gmv.vue'),
      meta: {
        title: '运营分析中心',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default about;
