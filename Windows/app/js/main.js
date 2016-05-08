/**
 * Controller goes Here
 * @param  {Object} GLOBAL
 * @return {Void}
 */
(function (GLOBAL){

    GLOBAL.controller = GLOBAL.controller || {};

    controller.uiWindowsStorage = {};

    /**
     * Initialize the application
     */
    controller.init = function () {

        this.getElements();
        this.attachEvents();
    };

    /**
     * Dom Storage
     */
    controller.elements = {};

    controller.currentActiveUIWindow = null;   

    controller.addWindow = function () {

        var objID = "uiw_" + (new Date()).getTime();

        this.uiWindowsStorage[objID] = {
            uiWindow: Object.create(UiWindow),
            icon: Object.create(UiIcon)
        };

        this.uiWindowsStorage[objID].uiWindow.init(objID);
        this.uiWindowsStorage[objID].icon.init(objID);
    };

    /**
     * Removes Window from storage
     * @param {Custom Event Object} evnt
     * @return {Void}
     */
    controller.removeWindow = function (evnt) {

        this.uiWindowsStorage[evnt.detail.uid] = null;
    };


    controller.preloadResources = function () {
        //todo - preload template.
    };

    /**
     * Store reference to Dom elements we will use
     */
    controller.getElements = function () {
        this.elements.windowsPlaceholder = document.getElementById('windows-placeholder');
        this.elements.createWindowButton = document.getElementById('create-window-button');
        this.elements.statusBar = document.getElementById('status-bar');
    };

    /**
     * Bind global UI specific events
     */
    controller.attachEvents = function () {

        this.addWindow = this.addWindow.bind(this);
        this.removeWindow = this.removeWindow.bind(this);

        Events.subscribe(window, 'window-removed', this.removeWindow);
        Events.subscribe(this.elements.createWindowButton, 'click', this.addWindow);
    };

    controller.detachIconEvents = function (uiWindowID) {

    };

    var UiIcon = {

        /**
         * Initialize Icon
         * @param {String} uid
         */
        init: function (uid) {
            this.uid = uid;

            console.info('Icon inited for window -> ', this.uid);
            this.render();
            this.attachEvents();
        },

        elements: {},

        /**
         * Render dom markup in to the status Bar
         */
        render: function () {
            this.elements.root = document.createElement('a');
            this.elements.root.href = 'javascript:;';
            this.elements.root.innerText = 'window ' + this.uid;

            controller.elements.statusBar.appendChild(this.elements.root);
        },

        destroy: function () {

            this.detachEvents();
            controller.elements.statusBar.removeChild(this.elements.root);
        },

        /**
         * Bind Icon events
         */
        attachEvents: function () {
            this.handleWindowState = this.handleWindowState.bind(this);
            this.destroy = this.destroy.bind(this);

            Events.subscribe(window, 'window-removed-' + this.uid, this.destroy);
            Events.subscribe(this.elements.root, 'click', this.handleWindowState);
        },

        /**
         * Remove Icon events
         */
        detachEvents: function () {
            this.handleWindowState = this.handleWindowState.bind(this);

            Events.unsubscribe(this.elements.root, 'click', this.handleWindowState);
        },

        handleWindowState: function () {

            console.log('toggle window state');
        }
    };

    controller.init();

})(window);