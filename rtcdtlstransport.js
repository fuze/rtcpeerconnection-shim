/*
 *  Copyright (c) 2018 Philipp Hancke. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';
var util = require('./util');

/* a wrapper around Edge's RTCDtlsTransport that makes it compatible
 * with WebRTC 1.0.
 */
module.exports = function(window) {
  // simple name aliase.
  if (!('onstatechange' in window.RTCDtlsTransport.prototype)) {
    util.aliasEventListener(window.RTCDtlsTransport.prototype,
      'dtlsstatechange', 'statechange');
  }
  return window.RTCDtlsTransport;
};
