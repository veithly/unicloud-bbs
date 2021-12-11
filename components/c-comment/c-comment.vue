<template>
	<view @tap="$emit('action',v)">
		<view class="m-2 p-4 transition-all" :class="[selectActiveColor]">
			<!-- 信息页 -->
			<view class="mx-2 mt-5 flex">
				<c-image :src="v.avatarUrl" class="avatar rounded" />
				<view class="flex flex-column ml-2">
					<text>{{ v.username }}</text>
					<uni-dateformat class="font-sm secondary-color" :date="v.comment_date" format="yyyy-MM-dd" :threshold="[60000, 3600000 * 24]" />
				</view>
			</view>
			<!-- 内容页 -->
			<view class="py-2">
				<text v-if="v.reply_username" class="careful-bg-color main-color p-1 mb-2 rounded font-sm">@{{v.reply_username}}</text>
				<view>{{v.comment_content}}</view>
			</view>
			<!-- 点赞评论 -->
			<view class="iconfont flex justify-end">
				<!-- 点赞 -->
				<view class="mr-2">
					<c-temp v-slot="op" :class="[activeColor(v.praiseStatus)]" >
						<text @tap.stop="praise(op)" class="icon-dianzan action-icon mr-2"></text>
						<text v-if="v.praiseNum">{{v.praiseNum}}</text>
					</c-temp>
				</view>
				<!-- 评论 -->
				<view class="mr-2" v-if="!disabledCommentIcon && commentCount">
					<text class="icon-pinglun action-icon mr-2"></text>
					{{commentCount}}
				</view>
			</view>
		</view>
		<c-divider />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentCount: 0
			};
		},
		props:{
			v: {
				type: Object,
				default: () => ({})
			},
			selectActive: {
				type: Boolean,
				default: false
			},
			disabledCommentIcon: {
				type:Boolean,
				default:false
			},
			requestFn: {
				type: Function,
				default: () => {}
			}
		},
		created() {
			this.requestFn(this)
		},
		computed:{
			selectActiveColor(){
				const {selectActive} = this
				return selectActive ? 'input-bg-color rounded' : ''
			}
		},
		methods:{
			activeColor(v) {
				return v ? 'main-color' : null
			},
			praise(op){
				const unloading = op.useLoading()
				const fail = msg => this.$U.notice(msg)
				const success = () => {
					if (this.v.praiseStatus){
						this.v.praiseNum--
					} else {
						this.v.praiseNum++
					}
					this.v.praiseStatus = !this.v.praiseStatus
				}
				const complete = () => unloading()
				const payload = {
					commentID: this.v._id,
					praiseStatus: this.v.praiseStatus
					
				}
				this.$emit('praise',{
					fail,
					success,
					complete,
					payload
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
</style>
