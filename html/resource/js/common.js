/*! Lawrence - v0.0.1 - 2015-12-06 */
(function(){$(function(){var a,b;return a=$(window).height(),$(".nav").height(a),b=new Waterfall({test:!1,between:25,boxDom:".waterfall-card"}),$(window).scroll(function(){return $(document).scrollTop()>=30?$(".header,.nav,.content").addClass("mini"):$(".header,.nav,.content").removeClass("mini")})})}).call(this);
//# sourceMappingURL=common.js.map