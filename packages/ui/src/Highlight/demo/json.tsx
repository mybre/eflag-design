/**
 * title: JSON 格式
 */

import { Highlight } from '@eflag/ui';

export default () => (
  <Highlight
    language="json"
    onCopyChange={value => {
      console.log('value', value);
    }}
  >
    {{
      name: 'Eflag Design',
      description: 'The Design System of Eflag',
      versions: ['1.0.0', '2.0.0', '2.5.1'],
    }}
  </Highlight>
);
