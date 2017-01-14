/*
 * View model for DayLight
 *
 * Author: Jack Hildebrandt
 * License: AGPLv3
 */
$(function() {
    function DaylightViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        DaylightViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_daylight, #tab_plugin_daylight, ...
        [ /* ... */ ]
    ]);
});
