<template>
	<view class="vivify fadeIn delay-250">
		<!-- 标题 -->
		<view class="title main-color font-weight-bold h2 flex justify-center align-center">
			Welcome back!
		</view>
		
		<!-- 表单域 -->
		<uni-forms ref="forms" class="forms px-2" :value="forms" :rules="rules">
			<uni-forms-item name="username">
				<uni-easyinput :input-border="false" placeholder="账号" class="input-bg-color py-2 rounded" v-model="forms.username"/>
			</uni-forms-item>
			
			<uni-forms-item name="password">
				<uni-easyinput :input-border="false" placeholder="密码" type="password" class="input-bg-color py-2 rounded" v-model="forms.password" @confirm="login"/>
			</uni-forms-item>
			
			<view class="text-center secondary-color position-relative" style="z-index: 98;">
				<view @click="toRegisterPage">注册新用户?</view>
				<view class="line position-absolute"/>
			</view>
		</uni-forms>
		
		<view class="cover bg-white" />
		
		<view class="bg-image flex align-center justify-center">
			<view class="iconfont icon-jiantou text-white login-button" @tap="login"/>
		</view>
	</view> 
</template>

<script>
	export default {
		data() {
			return {
				forms: {
					username: "",
					password: ""
				},
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
			toRegisterPage() {
				console.log("reg")
				uni.navigateTo({
					url: '/pages/register/register',
					animationType: 'slide-in-bottom'
				})
			},
			toHomePage() {
				uni.switchTab({
					url: '/pages/tabbar/home/home'
				})
			},
			async login() {
				try{
					this.$U.loading()
					
					const forms = await this.$refs.forms.validate()
					
					const { result } = await this.$A.user.login(forms)
					
					this.$U.refreshUser(result)
				
					this.$U.notice('登录成功')
					
					this.toHomePage()
				}catch(e){
					this.$U.notice(e.message || '校验失败')
				} finally {
					this.$U.hideLoading()
				}
			}
		}
	}
</script>

<style scoped>
	.title {
		height: 40vh;
	}
	
	.forms {
		height: 20vh;
	}
	
	.line {
		width: 180rpx;
		height: 2.5px;
		background-color: var(--secondary-color);
		left: 50%;
		transform: translateX(-50%);
		bottom: -6px;
	}
	
	.cover {
		height: 10vh;
		border-radius: 0 0 50% 50%;
		transform: translateY(60%);
	}
	
	.bg-image {
		height: 30vh;
		background-image: url(@/static/login/bg.jpg);
		background-size: cover;
		background-position: bottom;
	}
	
	.login-button {
		font-size: 140rpx;
	}
</style>
