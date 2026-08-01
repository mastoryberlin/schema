import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: '00.local',
      description: '',
    },
    {
      const: '01.nuxthub',
      description: '',
    },
    {
      const: '02.i18n',
      description: '',
    },
    {
      const: '03.biz',
      description: '',
    },
    {
      const: '04.auth',
      description: '',
    },
    {
      const: '05.state',
      description: '',
    },
    {
      const: '06.math',
      description: '',
    },
    {
      const: '07.design',
      description: '',
    },
    {
      const: '08.mas-auth',
      description: '',
    },
    {
      const: '09.documents',
      description: '',
    },
    {
      const: '10.editor',
      description: '',
    },
    {
      const: '11.agent',
      description: '',
    },
    {
      const: '12.knowledge',
      description: '',
    },
    {
      const: '13.generation',
      description: '',
    },
    {
      const: '99.test',
      description: '',
    },
  ],
} as const satisfies JSONSchema
