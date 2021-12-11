<template>
	<view>
		<view v-for="v of values" :key="v._id">
			<!-- 信息页 -->
			<view class="mx-2 mt-5 flex" @click="$emit('toUser',v)">
				<c-image :src="v.avatarUrl" class="avatar rounded" />
				<view class="flex flex-column ml-2">
					<text>{{ v.username }}</text>
					<uni-dateformat class="font-sm secondary-color" :date="v.create_date" format="yyyy-MM-dd" :threshold="[60000, 3600000 * 24]" />
				</view>
			</view>
			<!-- 详情页 -->
			<view class="my-2" @tap="$emit('toPost', v)">
				<text class="font-lg m-3">{{ v.title }}</text>
				<view class="mx-1 flex flex-wrap"><c-image class="m-1 rounded" :style="[resolveImgsSize(v.imgs.length)]" v-for="u in v.imgs" :src="u.url" :key="u.id" /></view>
			</view>

			<view class="mx-1 font-sm">
				<text v-for="(u, i) of v.topics" :key="i" class="topic p-1 px-2 mx-1 rounded">{{ u }}</text>
			</view>

			<view class="iconfont flex align-center justify-between my-3 mx-2">
				<view class="flex align-center">
					<c-temp class="mr-5" v-slot="op">
						<view @tap="praise(op, v)" :class="[activeColor(v.praiseStatus)]">
							<text class="icon-dianzan mr-1 action-icon"></text>
							<text v-if="v.praiseNum">{{v.praiseNum}}</text>
						</view>
					</c-temp>
					<c-temp v-slot="op" :emitFn="emitFn" :vid="v._id">
						<text class="icon-pinglun mr-1 action-icon"></text>
						<text v-if="op.count">{{op.count}}</text>
					</c-temp>
				</view>
				
				<c-temp v-slot="op">
					<view @tap="love(op, v)" :class="[activeColor(v.loveStatus)]">
						<text class="icon-like1 mr-1 action-icon"></text>
						<text v-if="v.loveNum">{{v.loveNum}}</text>
					</view>
				</c-temp>
				
				
			</view>

			<c-divider />
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			commentCounts: {
				
			}
		}
	},
	props: {
		values: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		emitFn(useCount,vid) {
			this.$emit('countComment',useCount,vid)
		},
		activeColor(status) {
			return status && 'main-color'
		},
		resolveImgsSize(len) {
			return {
				width: `${len <= 2 ? 345 : 220}rpx`,
				height: `${len <= 2 ? 330 : 220}rpx`
			}
		},
		praise(op, v) {
			const unloading = op.useLoading()
			const fail = msg => this.$U.notice(msg)
			const success = () => {
				if (v.praiseStatus) {
					v.praiseNum--
					v.praiseStatus = false
				} else {
					v.praiseNum++
					v.praiseStatus = true
				}
			}
			
			const complete = () => unloading()
			
			this.$emit('praise', {
				postID: v._id,
				praiseStatus: v.praiseStatus,
				fail,
				success,
				complete
			})
		},
		love(op, v) {
			const unloading = op.useLoading()
			const fail = msg => this.$U.notice(msg)
			const success = () => {
				if (v.loveStatus) {
					v.loveNum--
					v.loveStatus = false
				} else {
					v.loveNum++
					v.loveStatus = true
				}
			}
			
			const complete = () => unloading()
			
			this.$emit('love', {
				postID: v._id,
				loveStatus: v.loveStatus,
				fail,
				success,
				complete
			})
		}
	}
}
</script>

<style scoped>
.avatar {
	width: 90rpx;
	height: 90rpx;
}

.topic {
	color: #595959;
	background-color: #f5f5f5;
}

.action-icon {
	font-size: 45rpx;
}
</style>
