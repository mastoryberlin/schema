import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    '00.local',
    '01.nuxthub',
    '02.i18n',
    '03.biz',
    '04.auth',
    '05.state',
    '06.math',
    '07.design',
    '08.mas-auth',
    '09.documents',
    '10.editor',
    '11.agent',
    '12.knowledge',
    '13.generation',
    '99.test',
  ],
} as const satisfies JSONSchema
