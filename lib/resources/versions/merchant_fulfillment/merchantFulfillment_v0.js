const utils = require('../../../utils');

module.exports = {
  v0: {
    getEligibleShipmentServices: (req_params) => {
      return Object.assign(req_params, {
        method: 'POST',
        api_path: '/mfn/v0/eligibleShippingServices',
        restore_rate: 0.167
      });
    },
    getShipment: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          shipmentId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/mfn/v0/shipments/' + req_params.path.shipmentId,
        restore_rate: 1
      });
    },
    cancelShipment: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          shipmentId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'DELETE',
        api_path: '/mfn/v0/shipments/' + req_params.path.shipmentId,
        restore_rate: 1
      });
    },
    createShipment: (req_params) => {
      return Object.assign(req_params, {
        method: 'POST',
        api_path: '/mfn/v0/shipments',
        restore_rate: 0.5
      });
    },
    getAdditionalSellerInputs: (req_params) => {
      return Object.assign(req_params, {
        method: 'POST',
        api_path: '/mfn/v0/additionalSellerInputs',
        restore_rate: 1
      });
    }
  }
};
