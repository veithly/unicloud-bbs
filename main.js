import Vue from 'vue'
import App from './App'
import $U from "@/common/js"
import $A from "@/api"
import $Q from "@/common/js/ql.js"

// 统一的错误拦截
uniCloud.addInterceptor('callFunction', {
	success(res) {
		const { result } = res
		if (result.errCode !== 0) {
			throw new Error(result.errMsg)
		} 
	}
})

// 助手库
Vue.prototype.$U = $U

// api
Vue.prototype.$A = $A

// 数据库简化filed
Vue.prototype.$Q = $Q


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
