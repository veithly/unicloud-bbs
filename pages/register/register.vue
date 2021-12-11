<template>
	<view>
		<c-status-bar />
		<c-page-header title="注册" />

		<!-- 头像 -->
		<view class="avatar flex align-center justify-center">
			<uni-file-picker v-model="avatar" return-type="object" limit="1" mode="grid" file-mediatype="image" :image-styles="avatarStyles" @success="onAvatarUploadSuccess" @fail="onAvatarUploadFail" @delete="onAvatarUploadDelete">

				<view class="avatarSeat input-bg-color flex align-center justify-center">头像</view>
			</uni-file-picker>
		</view>

		<!-- 表单域 -->
		<uni-forms ref="forms" class="px-2 mt-3" :value="forms" :rules="rules">
			<uni-forms-item name="username">
				<uni-easyinput :input-border="false" placeholder="账号" class="input-bg-color py-2 rounded" v-model="forms.username" />
			</uni-forms-item>

			<uni-forms-item name="password">
				<uni-easyinput :input-border="false" placeholder="密码" type="password" class="input-bg-color py-2 rounded" v-model="forms.password" />
			</uni-forms-item>

			<uni-forms-item class="mt-3" name="gender" label="性别" label-align="center">

				<uni-data-checkbox v-model="forms.gender" :localdata="genderRange" mode="button" selected-color="#ff584f" />
			</uni-forms-item>
		</uni-forms>

		<c-button class="m-3 main-bg-color text-white" @on-tap="register" :disabled="disabled">注册</c-button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled: true,
				avatar: [],
				avatarStyles: {
					height: 120,
					width: 120,
					border: {
						width: "1px",
						style: "solid",
						radius: "8px"
					}
				},
				forms: {
					username: "",
					password: "",
					gender: 0
				},
				genderRange: [
					{ value: 0, text: "未知" },
					{ value: 1, text: "男" },
					{ value: 2, text: "女" },
				],
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: '请输入{label}',
						}, {
							minLength: 2,
							maxLength: 10,
							errorMessage: '{label}长度{minLength}到{maxLength}',
						}],
						label: "账号"
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入{label}',
						}, {
							minLength: 8,
							maxLength: 16,
							errorMessage: '{label}长度在{minLength}到{maxLength}',
						}, {
							pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@&%#_]{8,16}$/,
							errorMessage: "{label}必须包含大小写字母"
						}],
						label: "密码"
					}
				},
			}
		},
		methods: {
			onAvatarUploadSuccess() {
				this.disabled = false
			},
			onAvatarUploadFail() {
				this.disabled = true
			},
			onAvatarUploadDelete() {
				this.disabled = true
			},
			toHomePage() {
				uni.switchTab({
					url: '/pages/tabbar/home/home'
				})
			},
			async register() {
				try {
					this.$U.loading()
					const forms = await this.$refs.forms.validate()

					const { result } = await this.$A.user.regitser({
						...forms,
						avatar: this.avatar.url
					})

					this.$U.refreshUser(result)

					this.$U.notice('注册成功')
					
					this.toHomePage()
				} catch (e) {
					this.$U.notice(e.message || '校验失败')
				} finally {
					this.$U.hideLoading()
				}
			}
		}
	}
</script>

<style scoped>
	.avatar {
		width: 100%;
		height: 25vh;
	}
	
	.avatarSeat {
		width: 100%;
		height: 100%;
	}
</style>
