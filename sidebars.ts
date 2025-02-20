import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/* =====================================================
 Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 ===================================================== */

const sidebars: SidebarsConfig = {
  who_sidebar:[
    { type: 'doc'
    , label: 'Who we are'
    , id: 'who',
    },
    { type: 'category'
    , label: 'More about us'
    , collapsed: false
    , items: [ 'who/team'
             , 'who/contact'
             ],
    },
  ],
  what_sidebar:[
    { type: 'doc'
    , label: 'What we do'
    , id: 'what',
    },
    { type: 'category'
    , label: 'Our services'
    , collapsed: false
    , items: [ 'what/training'
             , 'what/consultancy'
             ],
    },
  ],
};

export default sidebars;
