var T = { // Templates
    Posts: "{{#children}}<article class='link-wrap'><a class='link' href='{{data.url}}' data-id='{{data.id}}' target='_blank'><div class='link-thumb'><div style='background-image: url({{data.thumbnail}})'></div></div><div class='link-info'><p class='link-title'>{{data.title}}</p><p class='link-domain'>{{data.domain}}</p><p class='link-sub'>{{data.subreddit}}</p>{{#data.over_18}}<p class='link-nsfw'>NSFW</p>{{/data.over_18}}</div></a><div class='to-comments' data-id='{{data.id}}'><div class='comments-icon'></div></div></article>{{/children}}<div class='list-button'><span id='more-links'>More</span></div><div id='main-overflow'></div>",
    Subreddits: {
        list: "{{#.}}<li data-name='{{.}}'><p class='sub'>{{.}}</p></li>{{/.}}",
        toRemoveList: "<ul class='remove-list'>{{#.}}<div class='item-to-remove sub-to-remove' data-name='{{.}}'><p>{{.}}</p><div data-name='{{.}}'></div></div>{{/.}}</ul>",
        toAddList: "{{#children}}<div class='subreddit'><div><p class='subreddit-title'>{{data.display_name}}</p><p class='subreddit-desc'>{{data.public_description}}</p></div><div class='btn-add-sub'><div></div></div></div>{{/children}}"
    },
    Channels: {
        toRemoveList: "<p id='remove-title'>Channels</p><ul class='remove-list'>{{#.}}<div class='item-to-remove channel-to-remove' data-title='{{name}}'><p>{{name}}</p><div data-title='{{name}}'></div></div>{{/.}}</ul>",
        single: '<li><div class="channel" data-title="{{name}}"><p>{{name}}</p><div>{{#subs}}<p>{{.}}</p>{{/subs}}</div></div></li>',
        list: '{{#.}}<li><div class="channel" data-title="{{name}}"><p>{{name}}</p><div>{{#subs}}<p>{{.}}</p>{{/subs}}</div></div></li>{{/.}}'
    },
    linkSummary: "<section id='link-summary'><a href='{{url}}' target='_blank'><p id='summary-title'>{{title}}</p><p id='summary-domain'>{{domain}}</p>{{#over_18}}<span class='link-nsfw summary-nsfw'>NSFW</span>{{/over_18}}</a><div id='summary-footer'><p id='summary-author'>by {{author}}</p><a class='btn-general' id='share-tw' target='_blank' href='https://twitter.com/intent/tweet?text=\"{{encodedTitle}}\" —&url={{url}}&via=ReedditApp&related=ReedditApp'>Tweet</a></div><div id='summary-extra'><p id='summary-sub'>{{subreddit}}</p><p id='summary-time'></p><a id='summary-comment-num' href='http://reddit.com{{link}}' target='_blank'>{{num_comments}} comments</a></section>",
    botonAgregarSubManual: "<div class='top-buttons'><div id='btn-sub-man'>Insert Manually</div><div id='btn-add-channel'>Create Channel</div></div>",
    formAgregarSubManual: '<div class="new-form" id="form-new-sub"><div class="form-left-corner"><div class="btn-general" id="btn-add-new-sub">Add Subreddit</div></div><div class="close-form">close</div><form><input type="text" id="txt-new-sub" placeholder="New subreddit name" /></form></div>',
    formAddNewChannel: '<div class="new-form" id="form-new-channel"><div class="form-left-corner"><div class="btn-general" id="btn-add-new-channel">Add Channel</div></div><div class="close-form">close</div><input type="text" id="txt-channel" placeholder="Channel name" /><div id="subs-for-channel"><input type="text" placeholder="Subreddit 1" /><input type="text" placeholder="Subreddit 2" /><input type="text" placeholder="Subreddit 3" /></div><div id="btn-add-another-sub">+ another subreddit</div></div>',
    botonCargarMasSubs: "<div class='list-button'><span id='more-subs'>More</span></div>",
    noLink: "No Post Selected",
    about: "<div class='new-form about-reeddit'><div class='close-form'>close</div><ul><li><a href='http://reedditapp.com/about' target='_blank'>Reeddit Homepage</a></li><li><a href='https://github.com/berbaquero/reeddit' target='_blank'>GitHub Project</a></li></ul><p>v1.7.0</p><p><a href='https://twitter.com/reedditapp'>@ReedditApp</a></p><p>Built by <a href='http://berbaquero.com' target='_blank'>Bernardo Baquero Stand</a></p></div>",
    exportData: "<div class='new-form move-data'><div class='close-form'>close</div><div class='move-data-exp'><h3>Export Data</h3><p>You can back-up your local subscriptions and then import them to any other Reeddit instance, or just restore them.</p><div class='btn-general' id='btn-save-dbx'>Save to Dropbox</div></div></div>",
    importData: "<div class='new-form move-data'><div class='close-form'>close</div><div class='move-data-imp'><h3>Import Data</h3><p>Load the subscriptions from another Reeddit instance.</p><p>Once you choose the reeddit data file, Reeddit will refresh with the imported data.</p><div class='btn-general' id='btn-dbx-imp'>Import from Dropbox</div></div></div>"
};