import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'agent',
      description: 'Improve the overall agentic experience, which is defined across both the Nuxt app (layer ??.agent) and the document agent worker (workers/document/*).',
    },
    {
      const: 'aidd-clean-aidd-dependson-resolver',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-aidd-plan',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-aidd-process-yaml',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-aidd-update-plan-yaml',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-aidd-update-yaml',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-aidd',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-get-current-priority',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-breakdown',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-deem-bad-yaml',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-deem-bad',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-deem-good-yaml',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-deem-good',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-deem-redundant',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-deem',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-due',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-goto',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-i18n-check',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-i18n-tags',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-i18n',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-journey-create',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-journey-process',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-journey',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-layer-add',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-layer-delete',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-layer-disable',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-layer-enable',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-layer-insert',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-layer-reflect',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-layer-rename',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-layer',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-publish',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-reopen-yaml',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-reopen',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-rewind',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-schema',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-secrets-rotate',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-secrets-upload',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-secrets',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-skills-update',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-skills',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-sync-curriculum',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-sync',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool-info',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool-props-sync',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool-props',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool-sync',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool-test-input-get-from-db',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool-test-input-stub',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool-test-input',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool-test-run',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool-test',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-tool',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-clean-mastory-vibe',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd-productivity',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'aidd',
      description: 'Optimize scripts, tools and setup for AI-driven development.  *ALWAYS* load the `aidd` skill to fully understand the system before diving into this area!',
    },
    {
      const: 'biz',
      description: 'Improve the product\'s observability, marketability and competitiveness: Enhance data collection for product and business analytics, add feature toggles, or support A/B experiments.',
    },
    {
      const: 'ci',
      description: 'Refine the GitHub Actions workflows, deployment environments, etc.',
    },
    {
      const: 'db',
      description: 'Modify the DB schema, handle migrations and/or deployment processes regarding the D1 SQLite database shared across workers. Your general focus will typically be on the @server/db/schema folder.',
    },
    {
      const: 'dep',
      description: 'Clean up, manage and/or upgrade dependencies.',
    },
    {
      const: 'devtools',
      description: 'Add new pages or functionality to the custom Mastory panel in Nuxt devtools to facilitate local dev and debugging. The devtools panel is structurally defined in @layers/00.local/app/utils/* and can be extended per-layer by adding pages and/or components to the `devtools` subfolders, respectively. Note that since the devtools panel is mounted as an iframe inside another iframe within the main Nuxt app, we need message communication to exchange data between panel and app - use the utility functions in @layers/00.local/app/utils/devtools.ts for that. Message types are centrally defined in @layers/00.local/shared/types/nuxt-devtools-rpc.ts - edit that file to extend the existing protocol.',
    },
    {
      const: 'editor',
      description: 'Improve the Tiptap editor\'s core functionality, or manage custom Tiptap  extensions. ALWAYS load the `tiptap` skill before diving into tasks.',
    },
    {
      const: 'gen-chat',
      description: 'Work on the area around generating HQ content in generation frames using Mastory\'s expert tools. Skills you will often need here include `gen-frame`, `expert-tools`, and `agents-sdk` (in particular the section on Workflows and how they integrate with Cloudflare Agents).',
    },
    {
      const: 'gen-frame',
      description: 'The app is supposed to generate HQ math content inside generation frames using Mastory\'s expert tools. Always load the `gen-frame` and `expert-tools` skills right away to understand what this is all about! You *may* also need the `agents-sdk` skill, and here in particular the section on Workflows and how they integrate with Cloudflare Agents.',
    },
    {
      const: 'i18n',
      description: 'Add locale messages and/or translate them into all supported locales (currently en, de, hu). IMPORTANT: *Only* write into layers/<layer>/i18n/locales/<locale>-draft.json files!  The files named <locale>.json (without the -draft slug) are reserved for human-approved locale messages, i.e. you *MUST NOT* overwrite them!',
    },
    {
      const: 'knowledge',
      description: 'Make the agent aware of selected profile documents and other relevant background documents, use them to populate missing tool inputs in genFrames, and create or modify them by itself based on conversations with the user. ALWAYS load the `document` skill to understand what kind of documents we\'re talking about! You *may* also need the `agents-sdk` skill, and here in particular the section on Think.',
    },
    {
      const: 'other',
      description: 'Implement something mostly or entirely unrelated to the Mastory app.',
    },
    {
      const: 'payment',
      description: 'Make sure the app\'s behavior matches Mastory\'s business logic in the narrowest sense: pricing, payments, credits usage.',
    },
    {
      const: 'project-structure',
      description: 'Refine or refactor the overall structure of the project.',
    },
    {
      const: 'reflect',
      description: 'Reflect the conventions and best practices from given example files in the Mastory project, then describe your findings in the mentioned README, prompt, or Markdown context file. Your observations impact all future development, so be *very* specific in your descriptions, highlight important patterns, and include code examples from the example files to contrast good vs. bad practices.',
    },
    {
      const: 'revise',
      description: 'This task has already been implemented by a coding agent, but the implementation doesn\'t match the specs and/or quality standards. Revise the existing implementation and spend special attention to the mentioned issues, then correct or improve the implementation.',
    },
    {
      const: 'robust',
      description: 'Handle edge cases, handle errors gracefully, ensure smooth, continuous usability of the app under all circumstances.',
    },
    {
      const: 'scrape',
      description: 'The script in @scripts/scrape-school-emails/bayern/scrape-school-emails.ts is specialized at finding school emails in Bayern (Bavaria). That original script was created from the following ruleset (quote): > - load bayern-schulen.html and parse it  > - iterate through all `<li>` in the top-level `<ul>`. For each such item: >   - capture the school title from the text content of the nested `<span class=\'rxTitle\'>` tag >   - capture the school page from its nested `<a href=\'(school page)\'>` tag >   - navigate to https://www.km.bayern.de/(path) using puppeteer >   - search that page for one of the following patterns: >     1. a verbatim email address (user)@(server).de >     2. a mailto: link to an email address >     3. a link to a page on the same domain with a pathname matching one of the keywords \'kontakt\' or \'sekretariat\' >     4. a smallest possible DOM block with any mention of words \'E-Mail\', \'Mail\', \'Kontakt\', or \'Sekretariat\' and one of: >       4.1. a verbatim email address (user)@(server).de >       4.2. a mailto: link to an email address >       4.3. any other link to the same domain >   - in cases 3 and 4.3 above, recursively follow those links using puppeteer and repeat the pattern search on the target page >   - output the name of the school, any detected email (or an empty string), and the URL at which it was found (or empty), in a CSV one-liner Create a copy of that original script in a suitably named new subfolder of @scripts/scrape-school-emails/, then adjust the new duplicate to work in the very same spirit, but tailored to another region, which may require a different reproducable procedure. Make sure to follow *exactly* the ruleset given in the task prompt while retaining the script\'s core features (web page access using fetch, batch processing, temp output w/ recovery mode, final report) just the same.',
    },
    {
      const: 'ssr',
      description: 'Ensure every page of the app renders consistently during SSR, smoothly transitioning up until Nuxt is fully hydrated on the client.',
    },
    {
      const: 'typst',
      description: 'Refactor the Typst integration into a standalone Nuxt module',
    },
    {
      const: 'ui',
      description: 'Develop the front-end of the web app - improving it\'s design, enabling new features, or refactoring Vue components used across the app\'s layers. Load the /nuxt-ui skill before anything else. *DO NOT* add hard-coded texts for titles, labels, placeholders, etc.! Instead, prepare English i18n locale messages in `layers/<layer>/i18n/locales/en-draft.json` - *DO NOT* translate them and *DO NOT* touch `.../en.json` (without the `-draft` suffix) since your text must undergo human review first.',
    },
  ],
} as const satisfies JSONSchema
