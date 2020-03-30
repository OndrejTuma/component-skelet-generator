import React, {Component} from 'react';
{{> mobxImport}}


{{> stylesImport}}


@inject({{#each stores as |store|}}{{#unless @first}}, {{/unless}}'{{store}}'{{/each}})
@observer
class {{name}} extends Component {
    render() {
        {{> componentReturn}}

    }
}

{{> componentExport}}