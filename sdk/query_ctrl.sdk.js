System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QueryCtrl;
    return {
        setters: [],
        execute: function () {///<reference path="../../headers/common.d.ts" />
            QueryCtrl = (function () {
                function QueryCtrl($scope, $injector) {
                    this.$scope = $scope;
                    this.$injector = $injector;
                    this.panel = this.panelCtrl.panel;
                }
                QueryCtrl.prototype.refresh = function () {
                    this.panelCtrl.refresh();
                };
                return QueryCtrl;
            }());
            exports_1("QueryCtrl", QueryCtrl);
        }
    };
});

