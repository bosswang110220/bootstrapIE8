/*
 基于jeDate 6.0.2版本再封装  
  Version: 1.0.0  
	实现周期、单个时间选择
	
*/

(function($) {

	$.extend({
		/**
		 * 结束时间（endTime）和开始时间（startTime）比较
		 * 
		 */
		compareTime: function(startTime, endTime) {
			if (startTime && endTime) {
				var start = new Date(startTime.replace("-", "/").replace("-", "/"));
				var end = new Date(endTime.replace("-", "/").replace("-", "/"));
				if (end < start) {
					alert("结束时间小于开始时间了！");
					return false;
				}
				return true;
			}

		}
	})

	/**
	 * 时间周期选择判断
	 * startId 开始时间ID
	 * endId  最后时间Id
	 * format 时间格式	
	 */
	$.datePeriod = function(startId, endId, format, callback) {
		var sdate, edate;
		if (!startId) return;
		if (!endId) return;
		if (!format) return;
		var startTime = {
			format: format,
			isinitVal: true,
			okfun: function(obj) {
				sdate = obj.val;
				endTime.trigger = false;
				$(endId).jeDate(endTime);
			}
		};
		var endTime = {
			format: format,
			isinitVal: true,
			okfun: function(obj) {
				edate = obj.val;
				if ($.compareTime(sdate, edate)) {
					if (callback) callback(sdate, edate);
				}

			}
		};
		$(startId).jeDate(startTime);
		$(endId).jeDate(endTime);

	};

	/**
	 * 单个时间选择判断
	 * dateId 选择器
	 * format 时间格式
	 * callback 回调函数
	 */
	$.dateSingle = function(dateId, format, callback) {
		if (!dateId) return;
		if (!format) return;
		var stime = {
			format: format,
			isinitVal: true,
			okfun: function(obj) {
				var date = obj.val;
				if (callback) callback(date);
			}
		};
		$(dateId).jeDate(stime);
	};


})(jQuery);
