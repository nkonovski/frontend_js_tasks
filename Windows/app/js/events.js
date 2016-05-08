(function (GLOBAL){
    
    /***
     * Create event
     * @param {String} eventName
     * @param {Object} eventDetail
     * returns {Event Object}
     */
    var createEvent = function(eventName, eventDetail){

        var event = new CustomEvent(eventName, {detail: eventDetail});

        return event;
    };

    /***
     * Subsciing and Publishing application events
     * - Extend to can pass data with the events
     * - Optional: trigger events on object
     */
    GLOBAL.Events = {

        /***
         * Subscribes a listener to event and trigger a handler
         * @param {Dom Object} el
         * @param {String} eventName
         * @param {Function} handler
         * returns void
         */
        subscribe: function (el,eventName,handler) {

            el.addEventListener(eventName,handler,false);
        },

        /***
         * Publishes an event to the listneres
         * @param {Dom Object} el
         * @param {String} eventName
         * returns void
         */
        publish: function (el,eventName, data) {

            var event = createEvent(eventName, data);
            el.dispatchEvent(event);
        },

        /***
         * Removes a listener from element and detach handler function
         * @param {Dom Object} el
         * @param {String} eventName
         * @param {Function} handler
         * returns void
         */
        unsubscribe: function (el,eventName,handler) {
            el.removeEventListener(eventName,handler,false);
        }
    };
})(window);