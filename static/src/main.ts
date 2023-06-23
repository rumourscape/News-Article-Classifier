import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { provideFluentDesignSystem, fluentCard, fluentButton, fluentTextField,
    fluentTreeView, fluentTreeItem, fluentDivider } from '@fluentui/web-components';

provideFluentDesignSystem().register(
    fluentCard(), 
    fluentButton(),
    fluentTextField(),
    fluentTreeView(), 
    fluentTreeItem(),
    fluentDivider()
);

createApp(App).mount('#app')
