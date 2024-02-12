import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FilterButtonVue from '../FilterButton.vue';

describe('FilterButton', () => {
  it('renders properly', () => {
    const wrapper = mount(FilterButtonVue, { props: { id: 'name' } });
    expect(wrapper.text()).toContain('All');
  });
});
