import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Base from './Base';

export default {
  title: 'site/Base',
  component: Base,
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />;

export const Default = Template.bind({});
Default.args = {};
