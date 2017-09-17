---
title: Subscribe to Hacks/Hackers Jobs Newsletter
authors:
- Jennifer 8. Lee
date: "2012-02-25"
_migration:
  id: 4260
  timestamp: 1486602223
categories:
- Jobs
---

Based on the number of job postings we are hearing about at Hacks/Hackers meetups, we are trying to compile a newsletter of jobs at the intersection of journalism x technology. The email may be frequent or sporadic depending on jobs volume. It may or may not be targeted. 

Have a job opening you want to promote? A CTO for a startup perhaps? Or a copyediting job at a blog? Send job descriptions to jobs[at]hackshackers[dot]com. The fields are job title, organization, location, description, qualification, contact information etc. 

Most fields below are required. It&#8217;s for your own good. Really. <!-- Begin MailChimp Signup Form -->

#mc\_embed\_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }

/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.

We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */

var fnames = new Array();var ftypes = new Array();fnames[0]=&#8217;EMAIL&#8217;;ftypes[0]=&#8217;email&#8217;;fnames[1]=&#8217;FNAME&#8217;;ftypes[1]=&#8217;text&#8217;;fnames[2]=&#8217;LNAME&#8217;;ftypes[2]=&#8217;text&#8217;;fnames[3]=&#8217;LOCATION&#8217;;ftypes[3]=&#8217;text&#8217;;fnames[4]=&#8217;BIO&#8217;;ftypes[4]=&#8217;text&#8217;;

try {

var jqueryLoaded=jQuery;

jqueryLoaded=true;

} catch(err) {

var jqueryLoaded=false;

}

var head= document.getElementsByTagName(&#8216;head&#8217;)[0];

if (!jqueryLoaded) {

var script = document.createElement(&#8216;script&#8217;);

script.type = &#8216;text/javascript&#8217;;

script.src = &#8216;http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js&#8217;;

head.appendChild(script);

if (script.readyState && script.onload!==null){

script.onreadystatechange= function () {

if (this.readyState == &#8216;complete&#8217;) mce\_preload\_check();

}

}

}

var script = document.createElement(&#8216;script&#8217;);

script.type = &#8216;text/javascript&#8217;;

script.src = &#8216;http://downloads.mailchimp.com/js/jquery.form-n-validate.js&#8217;;

head.appendChild(script);

var err_style = &#8221;;

try{

err\_style = mc\_custom\_error\_style;

} catch(e){

err\_style = &#8216;#mc\_embed\_signup input.mce\_inline\_error{border-color:#6B0505;} #mc\_embed\_signup div.mce\_inline_error{margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff;}&#8217;;

}

var head= document.getElementsByTagName(&#8216;head&#8217;)[0];

var style= document.createElement(&#8216;style&#8217;);

style.type= &#8216;text/css&#8217;;

if (style.styleSheet) {

style.styleSheet.cssText = err_style;

} else {

style.appendChild(document.createTextNode(err_style));

}

head.appendChild(style);

setTimeout(&#8216;mce\_preload\_check();&#8217;, 250);

var mce\_preload\_checks = 0;

function mce\_preload\_check(){

if (mce\_preload\_checks>40) return;

mce\_preload\_checks++;

try {

var jqueryLoaded=jQuery;

} catch(err) {

setTimeout(&#8216;mce\_preload\_check();&#8217;, 250);

return;

}

try {

var validatorLoaded=jQuery(&#8220;#fake-form&#8221;).validate({});

} catch(err) {

setTimeout(&#8216;mce\_preload\_check();&#8217;, 250);

return;

}

mce\_init\_form();

}

function mce\_init\_form(){

jQuery(document).ready( function($) {

var options = { errorClass: &#8216;mce\_inline\_error&#8217;, errorElement: &#8216;div&#8217;, onkeyup: function(){}, onfocusout:function(){}, onblur:function(){} };

var mce_validator = $(&#8220;#mc-embedded-subscribe-form&#8221;).validate(options);

$(&#8220;#mc-embedded-subscribe-form&#8221;).unbind(&#8216;submit&#8217;);//remove the validator so we can get into beforeSubmit on the ajaxform, which then calls the validator

options = { url: &#8216;http://hackshackers.us4.list-manage.com/subscribe/post-json?u=01829ab548bc129deef832195&id=deb36ee5ea&c=?&#8217;, type: &#8216;GET&#8217;, dataType: &#8216;json&#8217;, contentType: &#8220;application/json; charset=utf-8&#8243;,

beforeSubmit: function(){

$(&#8216;#mce\_tmp\_error_msg&#8217;).remove();

$(&#8216;.datefield&#8217;,&#8217;#mc\_embed\_signup&#8217;).each(

function(){

var txt = &#8216;filled&#8217;;

var fields = new Array();

var i = 0;

$(&#8216;:text&#8217;, this).each(

function(){

fields[i] = this;

i++;

});

$(&#8216;:hidden&#8217;, this).each(

function(){

var bday = false;

if (fields.length == 2){

bday = true;

fields[2] = {&#8216;value&#8217;:1970};//trick birthdays into having years

}

if ( fields[0].value==&#8217;MM&#8217; && fields[1].value==&#8217;DD&#8217; && (fields[2].value==&#8217;YYYY&#8217; || (bday && fields[2].value==1970) ) ){

this.value = &#8221;;

} else if ( fields[0].value==&#8221; && fields[1].value==&#8221; && (fields[2].value==&#8221; || (bday && fields[2].value==1970) ) ){

this.value = &#8221;;

} else {

this.value = fields[0].value+&#8217;/&#8217;+fields[1].value+&#8217;/&#8217;+fields[2].value;

}

});

});

return mce_validator.form();

},

success: mce\_success\_cb

};

$(&#8216;#mc-embedded-subscribe-form&#8217;).ajaxForm(options);

});

}

function mce\_success\_cb(resp){

$(&#8216;#mce-success-response&#8217;).hide();

$(&#8216;#mce-error-response&#8217;).hide();

if (resp.result==&#8221;success&#8221;){

$(&#8216;#mce-&#8216;+resp.result+&#8217;-response&#8217;).show();

$(&#8216;#mce-&#8216;+resp.result+&#8217;-response&#8217;).html(resp.msg);

$(&#8216;#mc-embedded-subscribe-form&#8217;).each(function(){

this.reset();

});

} else {

var index = -1;

var msg;

try {

var parts = resp.msg.split(&#8216; &#8211; &#8216;,2);

if (parts[1]==undefined){

msg = resp.msg;

} else {

i = parseInt(parts[0]);

if (i.toString() == parts[0]){

index = parts[0];

msg = parts[1];

} else {

index = -1;

msg = resp.msg;

}

}

} catch(e){

index = -1;

msg = resp.msg;

}

try{

if (index== -1){

$(&#8216;#mce-&#8216;+resp.result+&#8217;-response&#8217;).show();

$(&#8216;#mce-&#8216;+resp.result+&#8217;-response&#8217;).html(msg);

} else {

err\_id = &#8216;mce\_tmp\_error\_msg&#8217;;

html = &#8216; &#8216;+msg+&#8221;;

var input\_id = &#8216;#mc\_embed_signup&#8217;;

var f = $(input_id);

if (ftypes[index]==&#8217;address&#8217;){

input_id = &#8216;#mce-&#8216;+fnames[index]+&#8217;-addr1&#8242;;

f = $(input_id).parent().parent().get(0);

} else if (ftypes[index]==&#8217;date&#8217;){

input_id = &#8216;#mce-&#8216;+fnames[index]+&#8217;-month&#8217;;

f = $(input_id).parent().parent().get(0);

} else {

input_id = &#8216;#mce-&#8216;+fnames[index];

f = $().parent(input_id).get(0);

}

if (f){

$(f).append(html);

$(input_id).focus();

} else {

$(&#8216;#mce-&#8216;+resp.result+&#8217;-response&#8217;).show();

$(&#8216;#mce-&#8216;+resp.result+&#8217;-response&#8217;).html(msg);

}

}

} catch(e){

$(&#8216;#mce-&#8216;+resp.result+&#8217;-response&#8217;).show();

$(&#8216;#mce-&#8216;+resp.result+&#8217;-response&#8217;).html(msg);

}

}

}

