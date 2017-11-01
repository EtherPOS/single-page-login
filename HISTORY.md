HISTORY
========

upgraded iron router from 'iron:router@1.0.1', to 1.0.8

iron:core              upgraded from 1.0.8 to 1.0.11
iron:middleware-stack  upgraded from 1.0.9 to 1.1.0
iron:url               upgraded from 1.0.9 to 1.0.11

'iron:middleware-stack@1.1.0',

While selecting package versions:
   error: Conflict: Constraint iron:router@1.0.11 is not satisfied by iron:router 1.0.7.
   Constraints on package "iron:router":
   * iron:router@1.0.11 <- steeve:single-page-login 0.5.1
   * iron:router@1.0.1 <- steeve:iron-router-helpers 0.0.5



0.4.9
=====
* fixed default routeAfterLogout: 'singlePageLogin' to routeAfterLogout: '/login'

0.4.8
======
* #10 routeAfterLogout Does Not Work additional fix

0.4.7
======
* fixed #10 routeAfterLogout Does Not Work

0.4.6
======
* fixed #8 Signup not possible with forceLogin true.

0.2.2
======
* Upgraded for Meteor 0.8.2 and iron-router 0.8.2

0.1.7
======
* Upgraded for Meteor 0.8.0
* Upgraded for iron-router 0.7.1

0.1.6
======
* Meteor 0.7.2 and earlier
