import { css } from 'docz-plugin-css';
import doczPluginNetlify from 'docz-plugin-netlify';

export default {
    plugins: [css({ preprocessor: 'postcss' }), doczPluginNetlify()],
};
