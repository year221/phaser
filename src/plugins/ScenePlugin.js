/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2018 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser3-plugin-template/blob/master/LICENSE|MIT License}
*/

var BasePlugin = require('./BasePlugin');
var Class = require('../utils/Class');

/**
 * @classdesc
 * A Scene Level Plugin is installed into every Scene and belongs to that Scene.
 * It can listen for Scene events and respond to them.
 * It can map itself to a Scene property, or into the Scene Systems, or both.
 *
 * @class ScenePlugin
 * @memberOf Phaser.Plugins
 * @constructor
 * @since 3.8.0
 *
 * @param {Phaser.Game} game - [description]
 */
var ScenePlugin = new Class({

    Extends: BasePlugin,

    initialize:

    function ScenePlugin (scene, pluginManager)
    {
        BasePlugin.call(this, pluginManager);

        /**
         * A reference to the Scene that has installed this plugin.
         * This property is only set when the plugin is instantiated and added to the Scene, not before.
         *
         * @name Phaser.Plugins.ScenePlugin#scene
         * @type {?Phaser.Scene}
         * @protected
         * @since 3.8.0
         */
        this.scene = scene;

        /**
         * A reference to the Scene Systems of the Scene that has installed this plugin.
         * This property is only set when the plugin is instantiated and added to the Scene, not before.
         *
         * @name Phaser.Plugins.ScenePlugin#systems
         * @type {?Phaser.Scene.Systems}
         * @protected
         * @since 3.8.0
         */
        this.systems = scene.sys;

        scene.sys.events.once('boot', this.boot, this);
    },

    /**
     * This method is called when the Scene boots. It is only ever called once.
     * 
     * By this point the plugin properties `scene` and `systems` will have already been set.
     * 
     * In here you can listen for Scene events and set-up whatever you need for this plugin to run.
     *
     * @method Phaser.Plugins.ScenePlugin#boot
     * @since 3.8.0
     */
    boot: function ()
    {
        //  Here are the Scene events you can listen to.
        //  At the very least you should offer a destroy handler for when the Scene closes down:
        //  
        //  start
        //  ready
        //  preupdate
        //  update
        //  postupdate
        //  resize
        //  pause
        //  resume
        //  sleep
        //  wake
        //  transitioninit
        //  transitionstart
        //  transitioncomplete
        //  transitionout
        //  shutdown
        //  destroy

        //  I.e.:
        // var eventEmitter = this.systems.events;
        // eventEmitter.on('start', this.sceneStart, this);
        // eventEmitter.once('destroy', this.sceneDestroy, this);
    }

});

module.exports = ScenePlugin;