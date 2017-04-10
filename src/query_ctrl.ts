import { QueryCtrl } from 'app/plugins/sdk';
import angular from 'angular';

export class MonetQueryCtrl extends QueryCtrl {
  
  /** @ngInject **/  
  constructor($scope, $injector, private templateSrv, private $q, private uiSegmentSrv)  {
    super($scope, $injector);
    this.uiSegmentSrv = uiSegmentSrv;
    this.target.target = this.target.target || 'select metric';
    this.target.type = this.target.type || 'timeserie';
  }

  getOptions() {
    return this.datasource.metricFindQuery(this.target)
      .then(this.uiSegmentSrv.transformToSegments(false));
      // Options have to be transformed by uiSegmentSrv to be usable by metric-segment-model directive
  }

  toggleEditorMode() {
    this.target.rawQuery = !this.target.rawQuery;
  }

  onChangeInternal() {
    this.panelCtrl.refresh(); // Asks the panel to refresh data.
  }
}

