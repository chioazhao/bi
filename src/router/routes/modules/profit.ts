import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const about: AppRouteModule = {
  path: '/',
  name: 'Profit',
  component: LAYOUT,
  redirect: '/profit',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '利润看板中心',
  },
  children: [
    {
      path: 'profit',
      name: 'Profit',
      component: () => import('/@/views/kanban/profit.vue'),
      meta: {
        title: '利润看板中心',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default about;
