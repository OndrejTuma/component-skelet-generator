import React from 'react';
{{> mobxImport}}


{{> stylesImport}}

const {{name}} = inject({{#each stores as |store|}}{{#unless @first}}, {{/unless}}'{{store}}'{{/each}})(observer(
    ({{> openBrace}}{{#each stores}}{{#unless @first}}, {{/unless}}{{this}}{{/each}}{{> closeBrace}}) => {
        {{> componentReturn}}

    }
));

{{> componentExport}}