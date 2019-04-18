// ==UserScript==
// @name         HN Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simple Dark Mode Stylesheet for HN.
// @match        https://news.ycombinator.com/*
// @grant        All
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = (function EOF(){ /*!<<<EOF
body  { font-family:Verdana, Geneva, sans-serif; font-size:10pt; color:#828282; background-color: #333; }
#hnmain { background-color: #444; }
td    { font-family:Verdana, Geneva, sans-serif; font-size:10pt; color:#828282; }

.admin td   { font-family:Verdana, Geneva, sans-serif; font-size:8.5pt; color:#000000; }
.subtext td { font-family:Verdana, Geneva, sans-serif; font-size:  7pt; color:#828282; }

input    { font-family:monospace; font-size:10pt; }
input[type=\"submit\"] { font-family:Verdana, Geneva, sans-serif; }
textarea { font-family:monospace; font-size:10pt; background: #777; color: #EEE; }

a:link    { color:#CCCCCC; text-decoration:none; }
a:visited { color:#828282; text-decoration:none; }

.default { font-family:Verdana, Geneva, sans-serif; font-size: 10pt; color:#828282; }
.admin   { font-family:Verdana, Geneva, sans-serif; font-size:8.5pt; color:#000000; }
.title   { font-family:Verdana, Geneva, sans-serif; font-size: 10pt; color:#828282; }
.subtext { font-family:Verdana, Geneva, sans-serif; font-size:  7pt; color:#828282; }
.yclinks { font-family:Verdana, Geneva, sans-serif; font-size:  8pt; color:#828282; }
.pagetop { font-family:Verdana, Geneva, sans-serif; font-size: 10pt; color:#222222; }
.comhead { font-family:Verdana, Geneva, sans-serif; font-size:  8pt; color:#828282; }
.comment { font-family:Verdana, Geneva, sans-serif; font-size:  9pt; }
.hnname  { margin-right: 5px; }

.comment a:link, .comment a:visited { text-decoration: underline; }
.noshow { display: none; }
.nosee { visibility: hidden; pointer-events: none; cursor: default }

.c00, .c00 a:link { color:#DDD; }
.c5a, .c5a a:link, .c5a a:visited { color:#5a5a5a; }
.c73, .c73 a:link, .c73 a:visited { color:#737373; }
.c82, .c82 a:link, .c82 a:visited { color:#828282; }
.c88, .c88 a:link, .c88 a:visited { color:#888888; }
.c9c, .c9c a:link, .c9c a:visited { color:#9c9c9c; }
.cae, .cae a:link, .cae a:visited { color:#aeaeae; }
.cbe, .cbe a:link, .cbe a:visited { color:#bebebe; }
.cce, .cce a:link, .cce a:visited { color:#cecece; }
.cdd, .cdd a:link, .cdd a:visited { color:#dddddd; }

.pagetop a:visited { color:#000000;}
.topsel a:link, .topsel a:visited { color:#ffffff; }

.subtext a:link, .subtext a:visited { color:#828282; }
.subtext a:hover { text-decoration:underline; }

.comhead a:link, .subtext a:visited { color:#828282; }
.comhead a:hover { text-decoration:underline; }

.hnmore a:link, a:visited { color:#828282; }
.hnmore { text-decoration:underline; }
EOF
*/
    }).toString().split("EOF")[2]
    .replace(/\$\{([^}]+)\}/g, function(outer, inner, pos) {
        return this[inner];
    });
    document.getElementsByTagName('head')[0].appendChild(style);
})();
