/**
 * 青菜萝卜 API
 * 所有异步请求的地址
 */

layui.define(['laytpl', 'laypage', 'layer'],function(exports) {
	var $ = layui.jquery;
	var laypage = layui.laypage;
	var layer = layui.layer;
	var laytpl = layui.laytpl;
	
//	var BASE_PREFIX = "http://www.huding.name";
	
	var BASE_PREFIX = "http://localhost/luobo/admin";

	var pageSize = 10;
	
	var api = {
		/**
		 * 检查是否登录的地址
		 */
		CHECK_LOGIN_URL:BASE_PREFIX + "/checkLogin",
		/**
		 * 登录地址
		 */
		LOGIN_URL:BASE_PREFIX + "/login",
		/**
		 * 退出地址
		 */
		LOGOUT_URL:BASE_PREFIX + "/logout",
		
		YOULIAN_SHOW_URL:BASE_PREFIX + "/youlian",
		YOULIAN_ADD_URL:BASE_PREFIX + "/youlian/add",
		YOULIAN_EDIT_URL:BASE_PREFIX + "/youlian/edit",
		YOULIAN_DEL_URL:BASE_PREFIX + "/youlian/del",
		
		CATEGORY_SHOW_URL:BASE_PREFIX + "/category",
		CATEGORY_ALL_URL:BASE_PREFIX + "/category/all",
		CATEGORY_ADD_URL:BASE_PREFIX + "/category/add",
		CATEGORY_EDIT_URL:BASE_PREFIX + "/category/edit",
		CATEGORY_DEL_URL:BASE_PREFIX + "/category/del",
		
		BLOG_SHOW_URL:BASE_PREFIX + "/blog",
		BLOG_ADD_URL:BASE_PREFIX + "/blog/add",
		BLOG_EDIT_URL:BASE_PREFIX + "/blog/edit",
		BLOG_DEL_URL:BASE_PREFIX + "/blog/del",
		
		PASSWORD_URL:BASE_PREFIX + "/profile/password",

	}
	
	var action = {
		//Ajax
		ajax: function(url, data, success, options,async) {
			var that = this;
			options = options || {};
			data = data || {};
			return $.ajax({
				type: options.type || 'post',
				dataType: options.dataType || 'json',
				data: data,
				url: url,
				async:async || true,
				success: success || function(){
					layer.msg("success回调函数不能为空");
				},
				error: function(e) {
					options.error || layer.msg('请求异常，请重试', {
						shift: 6
					});
				}
			});
		},
		/**
		 * 异步Ajax
		 * @param {Object} url
		 * @param {Object} data
		 * @param {Object} success
		 * @param {Object} options
		 */
		doAjax: function(url, data, success, options) {
			action.ajax(url,data,success,options,true);
		},
		
		/**
		 * 同步Ajax
		 * @param {Object} url
		 * @param {Object} data
		 * @param {Object} success
		 * @param {Object} options
		 */
		doSyncAjax:function(url,data,success,options){
			action.ajax(url,data,success,options,false);
		},
		
		checkLogin:function(success,error) {
			var options = {
				error:error
			};
			action.doSyncAjax(api.CHECK_LOGIN_URL,{},success,options);
		},
		
		login:function(params,success){
			action.doAjax(api.LOGIN_URL,params,success);
		},
		logout:function(params,success){
			action.doAjax(api.LOGOUT_URL,params,success);
		},
		
		showYoulian:function(params,success){
			action.doAjax(api.YOULIAN_SHOW_URL,params,success);
		},
		addYoulian:function(params,success){
			action.doAjax(api.YOULIAN_ADD_URL,params,success);
		},
		editYoulian:function(params,success){
			action.doAjax(api.YOULIAN_EDIT_URL,params,success);
		},
		delYoulina:function(params,success){
			action.doAjax(api.YOULIAN_DEL_URL,params,success);
		},
		
		showCategory:function(params,success){
			action.doAjax(api.CATEGORY_SHOW_URL,params,success);
		},
		allCategory:function(params,success){
			action.doAjax(api.CATEGORY_ALL_URL,params,success);
		},
		addCategory:function(params,success){
			action.doAjax(api.CATEGORY_ADD_URL,params,success);
		},
		editCategory:function(params,success){
			action.doAjax(api.CATEGORY_EDIT_URL,params,success);
		},
		delCategory:function(params,success){
			action.doAjax(api.CATEGORY_DEL_URL,params,success);
		},
		
		showBlog:function(params,success){
			action.doAjax(api.BLOG_SHOW_URL,params,success);
		},
		addBlog:function(params,success){
			action.doAjax(api.BLOG_ADD_URL,params,success);
		},
		editBlog:function(params,success){
			action.doAjax(api.BLOG_EDIT_URL,params,success);
		},
		delBlog:function(params,success){
			action.doAjax(api.BLOG_DEL_URL,params,success);
		},
		
		password:function(params,success){
			action.doAjax(api.PASSWORD_URL,params,success);
		}
	}
	exports('api', action);
});