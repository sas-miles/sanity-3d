import { SquareSplitHorizontal } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'split-row',
  type: 'object',
  title: 'Split Row',
  description: 'Split Row: Customizable split row with multiple columns variants',
  icon: SquareSplitHorizontal,
  fields: [
    defineField({
      name: 'padding',
      type: 'section-padding',
      initialValue: 'small',
    }),
    defineField({
      name: 'direction',
      type: 'direction',
      initialValue: 'both',
    }),
    defineField({
      name: 'colorVariant',
      type: 'color-variant',
      description: 'Select a background color variant',
      initialValue: 'background',
    }),
    defineField({
      name: 'styleVariant',
      type: 'style-variant',
      description: 'Select a style variant',
      initialValue: 'default',
    }),
    defineField({
      name: 'themeVariant',
      type: 'theme-variant',
      description: 'Select a theme variant',
      initialValue: 'light',
    }),
    defineField({
      name: 'noGap',
      type: 'boolean',
      description: 'Remove gap between columns',
      initialValue: false,
    }),
    defineField({
      name: 'splitColumns',
      type: 'array',
      of: [{ type: 'split-content' }, { type: 'split-image' }, { type: 'split-video' }],
      validation: rule => rule.max(2),
    }),
  ],
  preview: {
    select: {
      title0: 'splitColumns.0.title',
      title1: 'splitColumns.1.title',
    },
    prepare({ title0, title1 }) {
      return {
        title: 'Split Row',
        subtitle: title0 || title1 || 'No Title',
      };
    },
  },
});
