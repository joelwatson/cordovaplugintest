/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('CordovaPluginTest.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'CordovaPluginTest.view.main.MainController',
        'CordovaPluginTest.view.main.MainModel',
        'CordovaPluginTest.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            items: [{
                xtype: 'button',
                text: 'Share this!',
                handler: function() {
                    window.socialmessage.send({
                        subject: "My Message",
                        text: 'My Message Content'
                    })
                }
            }]
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
