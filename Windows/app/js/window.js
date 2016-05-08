/**
 * Window goes Here
 * @param  {Object} GLOBAL
 * @return {Void}
 */
(function (GLOBAL) {
    
    GLOBAL.UiWindow = {
        
        init: function (uiWindowID) {
            this.uid = uiWindowID;

            console.info('Window inited -> ', this.uid);
            
            this.render();
            this.attachEvents();
        },
        
        elements: {},

        getElements: function () {
        },

        attachEvents: function () {

            this.destroy = this.destroy.bind(this);

            Events.subscribe(this.elements.closeButton, 'click', this.destroy)
        },

        detachEvents: function () {

            Events.unsubscribe(this.elements.closeButton, 'click', this.destroy);
        },

        render: function () {
            this.elements.root = document.createElement('div');
            this.elements.root.innerHTML = '<a href="javascript:;" class="close-button">X</a><div>' + this.uid + '</div>';

            controller.elements.windowsPlaceholder.appendChild(this.elements.root);
            this.elements.closeButton = this.elements.root.querySelector('.close-button')
        },

        destroy: function () {

            this.detachEvents();
            controller.elements.windowsPlaceholder.removeChild(this.elements.root);

            Events.publish(window, 'window-removed-' + this.uid);
            Events.publish(window, 'window-removed', {
                uid: this.uid
            });
        },

        minimize: function () {
        },

        maximize: function () {
        },

        resize: function () {
        }
    };

})(window);