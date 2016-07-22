'use strict';
import 'angular';
const testsContext = require.context('./', true, /.test$/);
testsContext.keys().forEach(testsContext);