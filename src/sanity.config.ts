'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { muxInput } from 'sanity-plugin-mux-input';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';

import { resolve } from '@/sanity/presentation/resolve';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { structure } from './sanity/structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,

  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      resolve,
    }),
    muxInput(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
