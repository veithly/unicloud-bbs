<template>
	<view>
		<scroll-view :style="{ height }" scroll-y @scroll="scroll" @scrolltolower="scrolltolower" @click="click"> 
			<view
				@touchstart="wxs.touchstart"
				@touchmove="wxs.touchmove"
				@touchend="wxs.touchend"
				@touchcancel="wxs.touchcancel"
				:style="{ minHeight: height }"
				:change:prop="wxs.propsWatch"
				:prop="wxsProp"
			>
				<!-- 下拉刷新区域 -->
				<view class="flex align-center justify-center" style="opacity: 0;" id="drop-down">
					<text class="position-absolute">{{ wxsProp.tip }}</text>
				</view>

				<slot />

				<!-- 上拉加载区域 -->
				<uni-load-more v-if="loadMoreStatus !== 'noMore'" :status="loadMoreStatus" />
				<view v-else class="text-center py-1">-- END --</view>
			</view>
		</scroll-view>
	</view>
</template>

<script module="wxs" lang="wxs">
const dropDown = {
	startY: 0,
	tip: "下拉刷新",
	pending: false,
	allow: true,
	lock: false,
	safetyThreshold: 60,
	threshold: 120,
	startPoint: { x: 0, y: 0 },
	minAngle: 45
}

const touchstart = (e, ins) => {
	if (canUseDropDownTask()) {
		useDropDownStartTask(e, ins)
	}
}

const touchmove = (e, ins) => {
	if (canUseDropDownTask()) {
		useDropDownMoveTask(e, ins)
	}
}

const touchend = (e, ins) => {
	if (canUseDropDownTask()) {
		useDropDownEndTask(e, ins)
	}
}

const touchcancel = (e, ins) => {
	if (canUseDropDownTask()) {
		useDropDownCancelTask(e, ins)
	}
}

const propsWatch = (newProps, oldProps, ins) => {
	dropDown.tip = newProps.tip
	dropDown.allow = newProps.allow
	dropDown.pending = newProps.pending

	if (!dropDown.pending) {
		setDropDownStyle(ins, 0, true)
		unlockDropDown()
	}
}

const useDropDownStartTask = (e, ins) => {
	dropDown.startPoint = getPosition(e)
	setDropDownStartY(getYPosition(e))
}

const useDropDownMoveTask = (e, ins) => {
	const y = getYPosition(e)
	const h = Math.ceil(y - dropDown.startY)

	const currentPoint = getPosition(e)

	// Prevent slip by mistake
	if (getAngle(dropDown.startPoint, currentPoint) < dropDown.minAngle) {
		return
	}

	setDropDownStyle(ins, h, false)

	// free zone
	if (h >= dropDown.threshold) {
		lockDropDown()
		setDropDownTip(ins, "释放更新")
		return
	}

	if (h >= dropDown.safetyThreshold) {
		setDropDownTip(ins, "下拉刷新")
	}

}

const useDropDownEndTask = (e, ins) => {
	if (dropDown.lock) {

		setDropDownStyle(ins, dropDown.safetyThreshold, true)

		setDropDownTip(ins, "加载中...")

		setDropDownPending(ins, true)

	} else {
		resetDropDown(ins)
	}
}

const useDropDownCancelTask = (e, ins) => {
	resetDropDown(ins)
}

const getAngle = (p1, p2) => {
	const x = Math.abs(p1.x - p2.x);
	const y = Math.abs(p1.y - p2.y);
	const z = Math.sqrt(x * x + y * y);
	let angle = 0;
	if (z !== 0) {
		angle = Math.asin(y / z) / Math.PI * 180;
	}
	return angle
}

const getPosition = e => {
	if (!e) {
		return { x: 0, y: 0 }
	}
	const touche = e.touches && e.touches[0]
	const changedTouche = e.changedTouches && e.changedTouches[0]
	if (touche) {
		return { x: touche.pageX,  y: touche.pageY}
	} else if (changedTouche) {
		return { x: changedTouche.pageX, y: changedTouche.pageY}
	} else {
		return { x: e.clientX, y: e.clientY }
	}
}

const getYPosition = (e) => {
	if (!e) return 0
	const touche = e.touches && e.touches[0]
	const changedTouche = e.changedTouches && e.changedTouches[0]
	if (touche) {
		return touche.pageY
	} else if (changedTouche) {
		return changedTouche.pageY
	} else {
		return e.clientY
	}
}

const canUseDropDownTask = () => dropDown.allow && !dropDown.pending

const lockDropDown = () => dropDown.lock = true
const unlockDropDown = () => dropDown.lock = false

const setDropDownAllow = (ins, b) => {
	ins.callMethod('setWxsPropAllow', b)
}
const setDropDownPending = (ins, b) => {
	ins.callMethod('setWxsPropPending', b)
}

const setDropDownTip = (ins, s) => {
	if (s !== dropDown.tip) {
		ins.callMethod('setWxsPropTip', s)
	}
}

const setDropDownStartY = n => dropDown.startY = n
const setDropDownStyle = (ins, height, hasAnimate) => {
	ins.requestAnimationFrame(() => {
		ins.selectComponent('#drop-down').setStyle({
			'will-change': 'auto',
			'min-height': `${height}px`,
			'opacity': `${height / dropDown.safetyThreshold}`,
			'transition': `all ${hasAnimate ? 0.2 : 0}s ease-in-out`,
			'color': "#ff584f",
			'backgroundColor': '#ffebee'
		})
	})
}

const resetDropDown = ins => {
	setDropDownTip(ins, "下拉加载")
	setDropDownStyle(ins, 0)
}


module.exports = {
	touchstart,
	touchmove,
	touchend,
	touchcancel,
	propsWatch
}
</script>

<script>
const loadMores = {
	hasMore: '上拉加载更多',
	noMore: '-- END --',
	loading: '加载中...'
}

/**
 * Scroll 滚动
 * @description 滚动组件
 *
 * @property {Boolean} loading = [true|false] 加载中
 * @property {Boolean} hasMore = [true|false] 有更多
 * @property {String} height = [500px] 高度，默认500px
 *
 * @event {Function} click 点击事件
 * @event {Function} pullUp 上拉加载事件
 * @event {Function} dropDown 下拉刷新事件
 */
export default {
	data() {
		return {
			wxsProp: {
				pending: false,
				allow: true,
				tip: '下拉刷新',
				threshold: 120
			}
		}
	},
	props: {
		// 加载中
		loading: {
			type: Boolean,
			default: false
		},
		// 有更多
		hasMore: {
			type: Boolean,
			default: true
		},
		// 高度
		height: {
			type: String,
			default: '500px'
		}
	},
	computed: {
		loadMoreStatus() {
			const { loading, hasMore } = this
			return loading ? 'loading' : hasMore ? 'hasMore' : 'noMore'
		}
	},
	watch: {
		'wxsProp.pending'(isEmitDropDown) {
			if (isEmitDropDown) {
				this.$emit('dropDown', () => {
					this.wxsProp.pending = false
				})
			}
		}
	},
	methods: {
		scroll(e) {
			this.wxsProp.allow = this.getScrollTop(e) < this.wxsProp.threshold
		},
		scrolltolower() {
			this.$emit('pullUp')
		},
		getScrollTop(e) {
			return e.detail.scrollTop
		},
		setWxsPropTip(s) {
			this.wxsProp.tip = s
		},
		setWxsPropAllow(b) {
			this.wxsProp.allow = b
		},
		setWxsPropPending(b) {
			this.wxsProp.pending = b
		},
		click(e) {
			this.$emit('click', e)
		}
	}
}
</script>
