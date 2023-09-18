/**
 * title: Diff 比较
 */

import { Select, Space, Switch } from '@eflag/design';
import { Highlight } from '@eflag/ui';
import React from 'react';

const languages = {
  // BASH
  bash: {
    // Source
    source: `
 #!/bin/bash

 ###### CONFIG
 ACCEPTED_HOSTS="/root/.hag_accepted.conf"
 BE_VERBOSE=false

 if [ "$UID" -ne 0 ]
 then
   echo "Superuser rights required"
   exit 2
 fi

 genApacheConf(){
   echo -e "# Host \${HOME_DIR}$1/$2 :"
 }

 echo '"quoted"' | tr -d \\/" > text.txt
     `.trim(),

    // Target
    target: `
 #!/bin/bash

 ###### CONFIG
 ACCEPTED_HOSTS="/root/.backup_accepted.conf"
 BE_VERBOSE=true

 if [ "$UID" -ne 0 ]
 then
   echo "Superuser rights required but not get"
   exit 2
 fi

 genApacheConf(){
   echo -e "# Host \${HOME_DIR}$1/$2 :"
 }

 echo '"quoted"' | tr -d \\/" > backup.txt
     `.trim(),
  },

  // JSON
  json: {
    // Source
    source: `
 {
   "name": "@eflag/design",
   "description": "The Design System of Eflag",
   "version": "1.0.0",
   "unpkg": "dist/design.min.js",
   "dumiAssets": "assets.json",
   "homepage": "https://github.com/oceanbase/design",
   "scripts": {
     "start": "npm run dev",
     "build": "npm run build:lib && npm run build:umd && npm run build:less",
     "build:lib": "dumi build",
     "build:umd": "webpack-cli",
     "build:less": "node scripts/gen_less_entry",
     "test:ci": "dumi test --runInBand --detectOpenHandles"
   }
 }
     `.trim(),
    // Target
    target: `
 {
   "name": "@eflag/design",
   "description": "The Design System of Eflag",
   "version": "2.0.0",
   "main": "lib/index.js",
   "unpkg": "dist/design.min.js",
   "scripts": {
     "start": "npm run dev",
     "dev": "dumi dev",
     "build": "npm run build:lib && npm run build:umd && npm run build:less",
     "build:umd": "webpack-cli",
     "test": "dumi test",
     "test:up": "dumi test --runInBand --updateSnapshot"
   }
 }
     `.trim(),
  },

  // TYPESCRIPT
  typescript: {
    // Source
    source: `
 interface MyComponentProps {
   value: string;
   onChange: (value: string) => void;
 }

 const MyComponentProps = (props: MyComponentProps) => {
   const { value, onChange } = props;
   return (
     <input
       value={value}
       onChange={e => onChange(e.target.value)}
     />
   );
 };
     `.trim(),

    // Target
    target: `
 interface MyComponentProps {
   value?: string;
   onChange?: (value: string) => void;
 }

 const MyComponentProps = ({ value, onChange }: MyComponentProps) => {
   return (
     <input
       value={value}
       onChange={e => {
         onChange?.(e.target.value);
       }}
     />
   );
 };
     `.trim(),
  },

  // JAVASCRIPT
  javascript: {
    // Source
    source: `
 function warning(...args) {
   console.error(...args);
 }

 warning(\`[WARN]:
 You are using full version of @eflag/design. Please config TreeShaking to remove additional content.
 \`);
     `.trim(),

    // Target
    target: `
 function warning(...args) {
   console.error('[WARN]:', '\\n', ...args);
 }

 warning('You are using full version of @eflag/design. Please config TreeShaking to remove additional content.');
     `.trim(),
  },
};

export default () => {
  const [source, setSource] = React.useState(true);
  const [target, setTarget] = React.useState(true);
  const [light, setLight] = React.useState(true);
  const [split, setSplit] = React.useState(true);
  const [language, setLanguage] = React.useState('json');
  const [offset, setOffset] = React.useState(false);

  const codes = languages[language];

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space>
        <Select
          style={{ width: 150 }}
          value={language}
          options={Object.keys(languages).map(lang => ({ label: lang, value: lang }))}
          onChange={newLang => {
            setLanguage(newLang);
          }}
        />
        <Switch
          checked={split}
          onChange={() => {
            setSplit(!split);
          }}
          checkedChildren="split"
          unCheckedChildren="split"
        />
        <Switch
          checked={light}
          onChange={() => {
            setLight(!light);
          }}
          checkedChildren="light"
          unCheckedChildren="light"
        />
        <Switch
          checked={source}
          onChange={() => {
            setSource(!source);
          }}
          checkedChildren="source"
          unCheckedChildren="source"
        />
        <Switch
          checked={target}
          onChange={() => {
            setTarget(!target);
          }}
          checkedChildren="target"
          unCheckedChildren="target"
        />
        <Switch
          checked={offset}
          onChange={() => {
            setOffset(!offset);
          }}
          checkedChildren="startRowIndex"
          unCheckedChildren="startRowIndex"
        />
      </Space>

      <Highlight.Diff
        split={split}
        language={language as 'json'}
        source={source ? codes.source : null}
        target={target ? codes.target : null}
        theme={light ? 'light' : 'dark'}
        // startRowIndex 可以统一指定为 number，也可以通过number[] 指定左右两边的起始行号
        startRowIndex={offset ? [93, 103] : undefined}
      />
    </Space>
  );
};
