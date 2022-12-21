import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const about: AppRouteModule = {
  path: '/',
  name: 'Monitor',
  component: LAYOUT,
  redirect: '/monitor',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '运营活动中心',
    orderNo: 10000,
  },
  children: [
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('/@/views/kanban/monitor.vue'),
      meta: {
        title: '运营活动中心',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default about;
